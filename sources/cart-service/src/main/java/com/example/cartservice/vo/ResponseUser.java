package com.example.cartservice.vo;

import lombok.Data;

import java.util.List;

@Data
public class ResponseUser {
    private String email;
    private String name;
    private String userId;
    private Long id;

    private List<ResponseCart> carts;
}
