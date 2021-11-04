package com.example.catalogservice.service;

import com.example.catalogservice.dto.CategoryDto;
import com.example.catalogservice.entity.CategoryEntity;

public interface CategoryService {
    CategoryDto createCategories(CategoryDto categoryDto);

    Iterable<CategoryEntity> getAllCategorys();
}
