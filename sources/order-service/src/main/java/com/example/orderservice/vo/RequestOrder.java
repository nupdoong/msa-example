package com.example.orderservice.vo;

import lombok.Data;

@Data
public class RequestOrder {
    private Long productId;
    private Integer qty;
    private Integer unitPrice;
}
