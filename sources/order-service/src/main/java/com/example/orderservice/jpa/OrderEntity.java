package com.example.orderservice.jpa;

import lombok.Data;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;

@Data
@Entity
@Table(name="orders")
public class OrderEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderNo;

    @Column(nullable = true)
    private Long productId;

    @Column(nullable = false)
    private String productName;

    @Column(nullable = true)
    private Integer id;

    @Column(nullable = false)
    private Integer qty;

    @Column(nullable = false)
    private Integer unitPrice;

    @Column(nullable = false)
    private Integer totalPrice;

    @Column(nullable = false)
    private String userId;

    @Column(nullable = false)
    private String orderId;

    @Column(nullable = false, insertable = false, updatable = false)
    @ColumnDefault(value="CURRENT_TIMESTAMP")
    private LocalDate orderDate;

    @Column
    @ColumnDefault(value="CURRENT_TIMESTAMP")
    private LocalDate modifiedAt;

    @Column
    @ColumnDefault(value="CURRENT_TIMESTAMP")
    private LocalDate cancelDate;

    @Column(nullable = false)
    private String zipcode;

    @Column(nullable = true)
    private String address1;

    @Column(nullable = true)
    private String address2;
}
