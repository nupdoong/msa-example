package com.example.orderservice.jpa;


import org.springframework.data.repository.CrudRepository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public interface OrderRepository extends CrudRepository<OrderEntity, Long> {
    OrderEntity findByOrderId(String orderId);
    Iterable<OrderEntity> findByUserId(String userId);
    List<OrderEntity> findAllByOrderDateBetweenAndUserId(LocalDate startDate, LocalDate endDate, String userId);
}
