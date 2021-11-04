package com.example.userservice.client;

import com.example.userservice.error.FeignErrorDecoder;
import com.example.userservice.vo.ResponseOrder;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;


//@FeignClient(name="order-service", configuration = FeignErrorDecoder.class)
@FeignClient(name="order-service")
public interface OrderServiceClient {
    @GetMapping("/{userId}/orders")
    List<ResponseOrder> getOrders(@PathVariable String userId);

    @GetMapping("/{userId}/orders_wrong")
    List<ResponseOrder> getOrderWrong(@PathVariable String userId);
}
