package com.example.catalogservice.jpa;

import com.example.catalogservice.entity.CatalogEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface CatalogRepository extends CrudRepository<CatalogEntity, Long> {
    CatalogEntity findByProductId(Long id);
    CatalogEntity findByProductName(String productName);


}
