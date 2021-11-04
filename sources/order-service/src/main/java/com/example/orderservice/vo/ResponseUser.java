package com.example.orderservice.vo;

import lombok.Data;

@Data
public class ResponseUser {
    private String email;
    private String name;
    private String userId;

    private String zipcode;
    private String address1;
    private String address2;

    private int wallet;

    private Long id;
}
