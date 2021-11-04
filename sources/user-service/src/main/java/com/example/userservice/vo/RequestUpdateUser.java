package com.example.userservice.vo;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class RequestUpdateUser {

    @Size(min = 2, message = "Name not be less than two characters")
    private String name;

    private int wallet;

    @Size(min = 2, message = "Zipcode not be less than one characters")
    private String zipcode;
    @Size(min = 2, message = "Address not be less than one characters")
    private String address1;
    @Size(min = 2, message = "Address detail not be less than one characters")
    private String address2;
}
