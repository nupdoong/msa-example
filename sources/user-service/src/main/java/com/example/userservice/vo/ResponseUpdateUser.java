package com.example.userservice.vo;

import lombok.Data;

import javax.validation.constraints.Size;
import java.util.Date;

@Data
public class ResponseUpdateUser {

    private Long id;
    private String email;
    private String name;
    private String userId;

    private String zipcode;
    private String address1;
    private String address2;

    private int wallet;

    private Date modifiedAt;
}
