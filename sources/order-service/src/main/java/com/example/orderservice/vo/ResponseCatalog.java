package com.example.orderservice.vo;

import lombok.Data;

import java.util.Date;

@Data
//@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseCatalog {
    private Long productId;
    private String productName;
    private Integer qty;
    private Integer unitPrice;
    private Date orderDate;
}
