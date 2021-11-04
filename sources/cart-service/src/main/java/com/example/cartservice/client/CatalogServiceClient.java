package com.example.cartservice.client;

import com.example.cartservice.vo.ResponseCatalog;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name="catalog-service")
public interface CatalogServiceClient {
    @GetMapping("/catalogs/catalog/{id}")
    ResponseCatalog getCatalog(@PathVariable Long id);
}
