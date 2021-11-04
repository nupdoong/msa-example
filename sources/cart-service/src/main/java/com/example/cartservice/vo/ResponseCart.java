package com.example.cartservice.vo;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseCart {
    private Integer cartNo;
    private Integer id;
    private Integer productId;
    private String productName;
    private Integer unitPrice;
    private String userId;
}
