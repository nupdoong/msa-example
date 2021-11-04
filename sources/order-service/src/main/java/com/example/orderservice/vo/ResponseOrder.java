package com.example.orderservice.vo;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseOrder {
    private Long productId;
    private String email;
    private String name;
    private Integer qty;
    private Integer unitPrice;
    private Integer totalPrice;
    private LocalDate orderDate;
    private LocalDate modifiedAt;

    private String orderId;
}
