package com.example.cartservice.jpa;


import lombok.Data;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name="carts")
public class CartEntity implements Serializable {
    @Id
    @GeneratedValue
    private Long cartNo;

    @Column(nullable = true)
    private Integer id;

    @Column(nullable = true)
    private Integer productId;

    @Column(nullable = false)
    private String productName;

    @Column(nullable = false)
    private String unitPrice;

    @Column(nullable = true)
    private String filename;

    @Column(nullable = false)
    private String userId;

    @Column(nullable = false, insertable = false, updatable = false)
    @ColumnDefault(value="CURRENT_TIMESTAMP")
    private Date created_at;

    @Column
    @ColumnDefault(value="CURRENT_TIMESTAMP")
    private Date deleted_at;




}
