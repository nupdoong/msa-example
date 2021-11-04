package com.example.orderservice.client;

import com.example.orderservice.vo.ResponseCart;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name="cart-service")
public interface CartServiceClient {
    @GetMapping("/carts/{userId}")
    List<ResponseCart> getCart(@PathVariable("userId") String userId);

    @DeleteMapping("/carts/{cartNo}")
    String deleteCart(@PathVariable("cartNo") Long cartNo);
}
