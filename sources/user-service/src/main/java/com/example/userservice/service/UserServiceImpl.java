package com.example.userservice.service;

import com.example.userservice.client.OrderServiceClient;
import com.example.userservice.dto.UserDto;
import com.example.userservice.entity.UserEntity;
import com.example.userservice.jpa.UserRepository;
import com.example.userservice.vo.ResponseOrder;
import feign.FeignException;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.circuitbreaker.CircuitBreaker;
import org.springframework.cloud.client.circuitbreaker.CircuitBreakerFactory;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
@Slf4j
public class UserServiceImpl implements UserService{
    UserRepository userRepository;
    Environment env;

    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @Autowired
    RestTemplate restTemplate;

    OrderServiceClient orderServiceClient;

    CircuitBreakerFactory circuitBreakerFactory;

    @Autowired
    public UserServiceImpl(UserRepository userRepository,
                           BCryptPasswordEncoder passwordEncoder,
                           Environment env,
                           OrderServiceClient orderServiceClient,
                           CircuitBreakerFactory circuitBreakerFactory) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.env = env;
        this.orderServiceClient = orderServiceClient;
        this.circuitBreakerFactory = circuitBreakerFactory;
    }

    @Override
    public UserDto createUser(UserDto userDto) {
        userDto.setUserId(UUID.randomUUID().toString());
//        userDto.setEncryptedPwd(passwordEncoder.encode(userDto.getPwd()));

        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        UserEntity userEntity = mapper.map(userDto, UserEntity.class);
        userEntity.setPassword(passwordEncoder.encode(userDto.getPassword()));
//        userEntity.setEncryptedPwd("encrypted_password");
        userRepository.save(userEntity);

        UserDto userVo = mapper.map(userEntity, UserDto.class);

        return userVo;
    }

    @Override
    public UserDto getUserByUserId(String userId) {
        UserEntity userEntity = userRepository.findByUserId(userId);
        if(userEntity == null){
            throw new UsernameNotFoundException("User not found");
        }
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        UserDto userDto = mapper.map(userEntity, UserDto.class);

        /*#1) RestTemplate*/
//        String orderUrl = String.format(env.getProperty("order_service.url"), userId);
//        ResponseEntity<List<ResponseOrder>> orderListResponse =
//                restTemplate.exchange(orderUrl, HttpMethod.GET, null,
//                        new ParameterizedTypeReference<List<ResponseOrder>>() {
//                        });

        /*order-service에서 주문 내역 조회*/
//        List<ResponseOrder> orderList = orderListResponse.getBody();

        /*#2) OpenFeign*/
//        List<ResponseOrder> orderList = orderServiceClient.getOrder(userId);
//        List<ResponseOrder> orderList = null;
//        try{
//            orderList = orderServiceClient.getOrders(userId);
////            userDto.setOrders(orderList);
////            orderList = orderServiceClient.getOrderWrong(userId);
////            orderServiceClient.getOrderWrong(userId);
//        }
//        catch (FeignException ex){
//            log.error(ex.getMessage());
//        }
        List<ResponseOrder> orderList = null;

        /*circuit breaker*/
        log.info("Before call order-service");
        CircuitBreaker circuitBreaker = circuitBreakerFactory.create("my-circuitbreaker");
        orderList = circuitBreaker.run(() -> orderServiceClient.getOrders(userId),
                throwable -> new ArrayList<>());
        log.info("After call order-service");

        userDto.setOrders(orderList);

        return userDto;
    }

    //유저 조회 by name
    @Override
    public UserDto getUserByName(String name) {
        UserEntity userEntity = userRepository.findByName(name);
        if(userEntity == null){
            throw new UsernameNotFoundException(name);
        }
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        UserDto userDto = mapper.map(userEntity, UserDto.class);
        return userDto;
    }

    //회원 정보 수정 by userId
    @Override
    public UserDto updateUser(String userId, UserDto userDetail, Long id) {
        Date now = new Date();
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        UserEntity userEntity = userRepository.findByUserId(userId);
        if(userEntity == null){
            throw new UsernameNotFoundException(userId);
        }
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        UserDto userDto = mapper.map(userEntity, UserDto.class);

        userDto.setId(id);
        userDto.setName(userDetail.getName());
        userDto.setWallet(userDetail.getWallet());
        userDto.setZipcode(userDetail.getZipcode());
        userDto.setAddress1(userDetail.getAddress1());
        userDto.setAddress2(userDetail.getAddress2());
        try {
            userDto.setModifiedAt(dateFormat.parse(dateFormat.format(now)));
        } catch (ParseException e) {
            e.printStackTrace();
        }

        userEntity = mapper.map(userDto, UserEntity.class);
        userRepository.save(userEntity);

        return userDto;
    }

    @Override
    public UserDto getUserDetailByEmail(String email) {
        UserEntity userEntity = userRepository.findByEmail(email);
        if(userEntity == null){
            throw new UsernameNotFoundException(email);
        }
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        UserDto userDto = new UserDto();
        userDto.setEmail(email);
        userDto = mapper.map(userEntity, UserDto.class);

        return userDto;
    }

    @Override
    public Iterable<UserEntity> getUserByAll() {
        return userRepository.findAll();
    }

    //사용자 삭제
    @Override
    public UserDto deleteUser(int id, UserDto userDto) {
        UserEntity userEntity = userRepository.findByEmail(userDto.getEmail());
        if(userEntity == null){
            throw new UsernameNotFoundException(userDto.getEmail());
        }
        userRepository.delete(userEntity);

        return userDto;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserEntity userEntity = userRepository.findByEmail(email);

        if(userEntity == null){
            throw new UsernameNotFoundException(email + "not found");
        }

        //User is an UserDetails
        User user = new User(userEntity.getEmail(), userEntity.getPassword(),
                true, true, true, true,
                new ArrayList<>());

        return user;
    }
}
