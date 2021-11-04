package com.example.orderservice.dto;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class OrderDto implements Serializable {
    private Long productId;
    private String productName;
    private Integer qty;
    private Integer unitPrice;
    private Integer totalPrice;

    private String orderId;
    private String userId;

    private Date modifiedAt;

    private Long id;
    private Long orderNo;

    private String email;
    private String name;

    private String zipcode;
    private String address1;
    private String address2;
}
