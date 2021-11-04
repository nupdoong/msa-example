package com.example.catalogservice.vo;

import lombok.Data;

import java.util.Date;

@Data
public class ResponseUpdateCatalog {
    private Integer cateNo;
    private String productName;
    private Integer qty;
    private Integer unitPrice;
    private String detail;
    private String filename;
    private Date modifiedAt;
}
