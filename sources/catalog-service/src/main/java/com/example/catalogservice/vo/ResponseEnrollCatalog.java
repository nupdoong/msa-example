package com.example.catalogservice.vo;

import lombok.Data;

import java.util.Date;

@Data
public class ResponseEnrollCatalog {
    private Integer cateNo;
    private String productName;
    private Integer qty;
    private Integer unitPrice;
}
