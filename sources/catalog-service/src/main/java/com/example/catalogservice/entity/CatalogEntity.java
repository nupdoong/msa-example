package com.example.catalogservice.entity;

import lombok.Data;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name="catalogs")
public class CatalogEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long productId;

    @Column(nullable = false)
    private String productName;

    @Column(nullable = false)
    private Integer qty;

    @Column(nullable = false)
    private Integer unitPrice;

    @Column
    private String detail;

    @Column
    private String filename;

    @Column
    private Integer cateNo;

    @Column(nullable = false, updatable = false, insertable = false)
    @ColumnDefault(value = "CURRENT_TIMESTAMP")
    private Date createdAt;

    @Column(nullable = true)
    @ColumnDefault(value="CURRENT_TIMESTAMP")
    private Date modifiedAt;

    @Column(nullable = true)
    private Date deletedAt;
}
