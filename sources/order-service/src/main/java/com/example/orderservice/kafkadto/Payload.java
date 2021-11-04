package com.example.orderservice.kafkadto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Payload {
    private String order_id;
    private String user_id;
    private Long product_id;
    private int qty;
    private int total_price;
    private int unit_price;
}
