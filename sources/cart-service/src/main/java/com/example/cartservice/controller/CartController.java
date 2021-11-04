package com.example.cartservice.controller;

import com.example.cartservice.client.CatalogServiceClient;
import com.example.cartservice.client.UserServiceClient;
import com.example.cartservice.dto.CartDto;
import com.example.cartservice.jpa.CartEntity;
import com.example.cartservice.service.CartService;
import com.example.cartservice.vo.RequestCart;
import com.example.cartservice.vo.ResponseCart;
import com.example.cartservice.vo.ResponseCatalog;
import com.example.cartservice.vo.ResponseUser;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/")
@Slf4j
public class CartController {
    Environment env;
    CartService cartService;
    UserServiceClient userServiceClient;
    CatalogServiceClient catalogServiceClient;

    @Autowired
    public CartController(Environment env, CartService cartService,
                          UserServiceClient userServiceClient, CatalogServiceClient catalogServiceClient)
    {
        this.env = env;
        this.cartService = cartService;
        this.userServiceClient = userServiceClient;
        this.catalogServiceClient = catalogServiceClient;
    }

    //장바구니 등록
    @PostMapping("/carts/{userId}")
    public ResponseEntity<ResponseCart> createCart(@PathVariable("userId") String userId,
                                                   @RequestBody RequestCart requestCart){
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        CartDto cartDto = mapper.map(requestCart, CartDto.class);

        ResponseUser responseUser = userServiceClient.getUser(userId);
        ResponseCatalog responseCatalog = catalogServiceClient.getCatalog(cartDto.getProductId());

        cartDto.setId(responseUser.getId());
        cartDto.setUserId(responseUser.getUserId());
        cartDto.setProductId(responseCatalog.getProductId());
        cartDto.setProductName(responseCatalog.getProductName());
        cartDto.setUnitPrice(responseCatalog.getUnitPrice());
        cartDto.setFilename(responseCatalog.getFilename());

        CartDto createCart = cartService.createCart(cartDto);

        ResponseCart responseCart = mapper.map(createCart, ResponseCart.class);

        return ResponseEntity.status(HttpStatus.OK).body(responseCart);
    }

    //사용자 장바구니 조회
    @GetMapping("/carts/{userId}")
    public ResponseEntity<List<ResponseCart>> getCart(@PathVariable("userId") String userId){
        Iterable<CartEntity> cartList = cartService.getAllCarts();

        List<ResponseCart> result = new ArrayList<>();

        cartList.forEach(v->{
            if(v.getUserId().equals(userId)){
                result.add(new ModelMapper().map(v, ResponseCart.class));
            }
        });

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    //장바구니 삭제
    @DeleteMapping("/carts/{cartNo}")
    public ResponseEntity<String> deleteCart(@PathVariable("cartNo") Long cartNo){

        String result;
        result = cartService.deleteCart(cartNo);

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}
