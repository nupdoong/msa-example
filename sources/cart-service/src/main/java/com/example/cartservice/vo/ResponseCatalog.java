package com.example.cartservice.vo;

import lombok.Data;

import java.util.Date;

@Data
public class ResponseCatalog {
    private Long productId;
    private Integer cateNo;
    private String productName;
    private Integer qty;
    private Integer unitPrice;
    private String filename;
    private Date createdAt;
}
