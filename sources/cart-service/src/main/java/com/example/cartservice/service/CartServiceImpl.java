package com.example.cartservice.service;

import com.example.cartservice.dto.CartDto;
import com.example.cartservice.jpa.CartEntity;
import com.example.cartservice.jpa.CartRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class CartServiceImpl implements CartService{
    CartRepository cartRepository;
    Environment env;

    @Autowired
    public CartServiceImpl(CartRepository cartRepository,
                           Environment env){
        this.cartRepository = cartRepository;
        this.env = env;
    }

    //장바구니 담기
    @Override
    public CartDto createCart(CartDto cartDto) {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        CartEntity cartEntity = mapper.map(cartDto, CartEntity.class);
        cartRepository.save(cartEntity);

        CartDto returnVal = mapper.map(cartEntity, CartDto.class);

        return returnVal;
    }

    @Override
    public Iterable<CartEntity> getAllCarts() {
        return cartRepository.findAll();
    }

    //cart 삭제
    @Override
    public String deleteCart(Long cartNo) {
        CartEntity cartEntity = cartRepository.findByCartNo(cartNo);
        if(cartEntity == null){
            try{
                throw new Exception();
            }
            catch (Exception e){
                e.printStackTrace();
            }
        }
        cartRepository.delete(cartEntity);
        String result = "Delete OK!";
        return result;
    }

    @Override
    public CartDto getUserByUserId(String userId) {
        CartEntity cartEntity = cartRepository.findByUserId(userId);
        CartDto cartDto = new ModelMapper().map(cartEntity, CartDto.class);
        return cartDto;
    }

    @Override
    public CartEntity getCart(String userId) {
        return cartRepository.findByUserId(userId);
    }



}
