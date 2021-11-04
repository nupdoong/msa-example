package com.example.cartservice.dto;

import lombok.Data;


import java.io.Serializable;
import java.util.Date;

@Data
public class CartDto implements Serializable {
    private Long cartNo;
    private Long id;
    private Long productId;
    private String productName;
    private Integer unitPrice;
    private String filename;
    private String userId;
    private Date createdAt;
    private Date deletedAt;
}
