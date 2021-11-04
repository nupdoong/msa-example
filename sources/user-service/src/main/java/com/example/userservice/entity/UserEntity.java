package com.example.userservice.entity;

import lombok.Data;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name="users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50, unique = true)
    private String email;

    @Column(nullable = false, length = 50)
    private String name;

    @Column(nullable = false, unique = true)
    private String userId;

    @Column(nullable = false, unique = true)
    private String password;

    //우편번호
    @Column(length = 7)
    private String zipcode;

    //주소
    @Column(length = 150)
    private String address1;

    //상세주소
    @Column(length = 50)
    private String address2;

    //관리자 유무
    @Column
    private int admin;

    //지갑
    @Column
    private int wallet;

    @Column(nullable = false, updatable = false, insertable = false)
    @ColumnDefault(value="CURRENT_TIMESTAMP")
    private Date createdAt;

    @Column(nullable = true)
    @ColumnDefault(value="CURRENT_TIMESTAMP")
    private Date modifiedAt;

    @Column(nullable = true)
    private Date deletedAt;


}
