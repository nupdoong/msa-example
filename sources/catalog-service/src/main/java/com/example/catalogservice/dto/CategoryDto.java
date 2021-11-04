package com.example.catalogservice.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class CategoryDto implements Serializable {
    private Integer cateNo;
    private String cateName;
}
