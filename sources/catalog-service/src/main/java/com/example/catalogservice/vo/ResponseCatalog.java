package com.example.catalogservice.vo;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.Date;

@Data
//@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseCatalog {
    private Long productId;
    private Integer cateNo;
    private String productName;
    private Integer qty;
    private Integer unitPrice;
    private String detail;
    private Date createdAt;
}
