package com.example.catalogservice.service;

import com.example.catalogservice.dto.CategoryDto;
import com.example.catalogservice.entity.CategoryEntity;
import com.example.catalogservice.jpa.CategoryRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class CategoryServiceImpl implements CategoryService{
    CategoryRepository categoryRepository;
    Environment env;

    @Autowired
    public CategoryServiceImpl(CategoryRepository categoryRepository, Environment env) {
        this.categoryRepository = categoryRepository;
        this.env = env;
    }

    //카테고리 등록
    @Override
    public CategoryDto createCategories(CategoryDto categoryDto) {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        CategoryEntity categoryEntity = mapper.map(categoryDto, CategoryEntity.class);
        categoryRepository.save(categoryEntity);

        categoryDto = mapper.map(categoryEntity, CategoryDto.class);

        return categoryDto;
    }

    @Override
    public Iterable<CategoryEntity> getAllCategorys() {
        return categoryRepository.findAll();
    }
}
