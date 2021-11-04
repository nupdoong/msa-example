package com.example.kafkaproducersample;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.config.TopicBuilder;
import org.springframework.kafka.core.KafkaTemplate;

@SpringBootApplication
public class KafkaProducerSampleApplication {

    public static void main(String[] args) {
        SpringApplication.run(KafkaProducerSampleApplication.class, args);
    }

//    @Bean
//    public NewTopic topic(){
//        return TopicBuilder.name("topic1").partitions(1).replicas(1).build();
//    }
//
//    @Bean
//    public ApplicationRunner runner(KafkaTemplate<String, String> template){
//        return args -> {
//            template.send("topic1", "test");
//        };
//    }

    @KafkaListener(id="myId", topics = "topic1")
    public void listen(String in){
        System.out.println(in);
    }
}
