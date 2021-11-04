package com.example.catalogservice.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Data
@Entity
@Table(name="categories")
public class CategoryEntity implements Serializable {
    @Id
    private Long cateNo;

    @Column
    private String cateName;

    @Column
    private String url;
}
