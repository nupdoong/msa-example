package com.example.orderservice.vo;

import lombok.Data;

@Data
public class ResponseCart {
    private Long cartNo;
    private Long productId;
    private String productName;
    private Integer unitPrice;
    private String userId;
}
