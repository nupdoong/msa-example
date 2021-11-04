package com.example.catalogservice.jpa;

import com.example.catalogservice.entity.CategoryEntity;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<CategoryEntity, Long> {

}
