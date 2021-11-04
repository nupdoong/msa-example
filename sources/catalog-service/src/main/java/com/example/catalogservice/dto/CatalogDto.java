package com.example.catalogservice.dto;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class CatalogDto implements Serializable {
    private Long productId;
    private String productName;
    private Integer qty;
    private Integer unitPrice;
    private Integer totalPrice;
    private Integer cateNo;
    private String detail;
    private String filename;

    private String orderId;
    private String userId;
    private Date modifiedAt;
}
