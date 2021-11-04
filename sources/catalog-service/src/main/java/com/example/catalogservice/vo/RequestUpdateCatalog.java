package com.example.catalogservice.vo;

import lombok.Data;

@Data
public class RequestUpdateCatalog {
    private Integer cateNo;
    private String productName;
    private Integer qty;
    private Integer unitPrice;
    private String detail;
    private String filename;
}
