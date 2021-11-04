package com.example.catalogservice.service;

import com.example.catalogservice.dto.CatalogDto;
import com.example.catalogservice.entity.CatalogEntity;

import java.util.Optional;

public interface CatalogService {
    Iterable<CatalogEntity> getAllCatalogs();

    CatalogEntity getCatalog(Long id);
    CatalogEntity getCatalogByName(String productName);

    CatalogDto createCatalog(CatalogDto catalogDto);

    Iterable<CatalogEntity> getCateCatalog(Integer cateNo);

    String deleteCatalog(Long id);

    CatalogDto updateCatalog(Long id, CatalogDto catalogDto);
}
