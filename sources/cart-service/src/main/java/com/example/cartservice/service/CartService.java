package com.example.cartservice.service;

import com.example.cartservice.dto.CartDto;
import com.example.cartservice.jpa.CartEntity;

public interface CartService {
    String deleteCart(Long cartNo);
    CartDto getUserByUserId(String userId);
    CartEntity getCart(String userId);

    CartDto createCart(CartDto cartDto);

    Iterable<CartEntity> getAllCarts();
}
