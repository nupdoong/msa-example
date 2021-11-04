package com.example.orderservice.vo;

import lombok.Data;

import java.time.LocalDate;

@Data
public class RequestBetweenDate {
    private LocalDate startDate;
    private LocalDate endDate;
}
