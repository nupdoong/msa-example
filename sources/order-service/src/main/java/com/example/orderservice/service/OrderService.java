package com.example.orderservice.service;

import com.example.orderservice.dto.OrderDto;
import com.example.orderservice.jpa.OrderEntity;

public interface OrderService {
    OrderDto createOrder(OrderDto orderDetail, String userId);
    OrderDto getOrderByOrderId(String orderId);
    Iterable<OrderEntity> getOrderByUserId(String userId);
    OrderDto updateOrder(OrderDto orderDetail, Long orderNo);

    Iterable<OrderEntity> getAllOrders();

    String deleteOrder(String orderId);
}
