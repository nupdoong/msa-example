package com.example.userservice.dto;

import com.example.userservice.vo.ResponseOrder;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class UserDto {
    private Long id;
    private String email;
    private String name;
    private String password;
    private String userId;
    private String zipcode;
    private String address1;
    private String address2;
    private int admin;
    private int wallet;
    private Date createAt;
    private Date modifiedAt;
    private Date deletedAt;

    private String decryptedPwd;
    private String encryptedPwd;

    private List<ResponseOrder> orders;
}
