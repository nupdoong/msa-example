package com.example.secondservice;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/second-service")
@Slf4j
public class SecondServiceController {
    Environment env;

    @Autowired
    public SecondServiceController(Environment env){
        this.env = env;
    }
    // GET http://localhost:8081/first-service/welcome
    @GetMapping("/welcome")
    public String welcome(){
        return "Welcome to the Second Service";
    }

    @GetMapping("/message")
    public String message(@RequestHeader("second-request") String header){
        log.info(String.format("Request Header=%s",header));
        log.info("Request Header={}",header);
        return "Hello, second-service message";
    }

    @GetMapping("/check")
    public String check(HttpServletRequest request){
        log.info("Server Port={}", request.getServerPort());

        return String.format("Hi, there. This is a message from First Service on Port %s.", env.getProperty("local.server.port"));
    }
}
