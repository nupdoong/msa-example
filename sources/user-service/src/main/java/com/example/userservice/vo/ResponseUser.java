package com.example.userservice.vo;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class ResponseUser {
    private Long id;
    private String email;
    private String password;
    private String name;
    private String userId;

    private String zipcode;
    private String address1;
    private String address2;

    private int wallet;
    private int admin;

    private Date modifiedAt;

    private List<ResponseOrder> orders;
}
