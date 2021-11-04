package com.example.catalogservice.controller;

import com.example.catalogservice.dto.CatalogDto;
import com.example.catalogservice.dto.CategoryDto;
import com.example.catalogservice.entity.CatalogEntity;
import com.example.catalogservice.entity.CategoryEntity;
import com.example.catalogservice.service.CatalogService;
import com.example.catalogservice.service.CategoryService;
import com.example.catalogservice.vo.*;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/")
@Slf4j
public class CatalogController {
    private Environment env;
    CatalogService catalogService;
    CategoryService categoryService;

    @Autowired
    public CatalogController(Environment env,
                             CatalogService catalogService,
                             CategoryService categoryService){
        this.env = env;
        this.catalogService = catalogService;
        this.categoryService = categoryService;
    }

    @GetMapping("/health_check")
    public String status(HttpServletRequest request){
        return String.format("Service on port %s", request.getServerPort());
    }

    //전체 상품 조회
    @GetMapping("/catalogs")
    public ResponseEntity<List<ResponseCatalog>> getCatalogs(){
        Iterable<CatalogEntity> orderList = catalogService.getAllCatalogs();

        List<ResponseCatalog> result = new ArrayList<>();
        orderList.forEach(v -> {
            result.add(new ModelMapper().map(v, ResponseCatalog.class));
        });

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    //카테고리 별 상품 조회
    @GetMapping("/catalogs/cate/{cateNo}")
    public ResponseEntity<List<ResponseCatalog>> getCatalogByCate(@PathVariable Integer cateNo){
        Iterable<CatalogEntity> cateList = catalogService.getCateCatalog(cateNo);
        List<ResponseCatalog> result = new ArrayList<>();

        cateList.forEach(v->{
            if(v.getCateNo() == cateNo){
                result.add(new ModelMapper().map(v, ResponseCatalog.class));
            }
        });
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    //상품 생성
    @PostMapping("/catalogs")
    public ResponseEntity<ResponseEnrollCatalog> createCatalog(@RequestBody RequestEnrollCatalog requestEnrollCatalog){
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        CatalogDto catalogDto = mapper.map(requestEnrollCatalog, CatalogDto.class);
        catalogService.createCatalog(catalogDto);

        ResponseEnrollCatalog responseEnrollCatalog = mapper.map(catalogDto, ResponseEnrollCatalog.class);

        return ResponseEntity.status(HttpStatus.OK).body(responseEnrollCatalog);
    }

    //개별 상품 조회
    @GetMapping("/catalogs/catalog/{id}")
    public ResponseEntity<ResponseCatalog> getCatalog(@PathVariable Long id) {
        log.info("Before retrieve catalogs data");
        CatalogEntity catalogEntity = catalogService.getCatalog(id);
        log.info("After retrieve catalogs data");

        if (catalogEntity != null) {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ModelMapper().map(catalogEntity, ResponseCatalog.class));
        } else {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    //책 이름으로 조회
    @GetMapping("/catalogs/{productName}")
    public ResponseEntity<ResponseCatalog> getCatalogByName(@PathVariable String productName) {
        log.info("Before retrieve catalogs data");
        CatalogEntity catalogEntity = catalogService.getCatalogByName(productName);
        log.info("After retrieve catalogs data");

        if (catalogEntity != null) {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ModelMapper().map(catalogEntity, ResponseCatalog.class));
        } else {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    //(관리자) 상품 수정
    @PutMapping("/catalogs/{id}")
    public ResponseEntity<ResponseUpdateCatalog> updateCatalog(@PathVariable Long id,
                                                         @RequestBody RequestUpdateCatalog requestUpdateCatalog){
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        CatalogDto catalogDto = mapper.map(requestUpdateCatalog, CatalogDto.class);
        catalogDto = catalogService.updateCatalog(id, catalogDto);
        ResponseUpdateCatalog responseUpdateCatalog = mapper.map(catalogDto, ResponseUpdateCatalog.class);

        return ResponseEntity.status(HttpStatus.OK).body(responseUpdateCatalog);
    }

    //(관리자) 상품 삭제
    @DeleteMapping("/catalogs/{id}")
    public ResponseEntity<String> deleteCatalog(@PathVariable Long id){
        String result;
        result = catalogService.deleteCatalog(id);

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    //카테고리 품목 생성
    @PostMapping("/categories")
    public ResponseEntity<ResponseCategory> createCategories(@RequestBody RequestCategory requestCategory){
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        CategoryDto categoryDto = mapper.map(requestCategory, CategoryDto.class);
        categoryService.createCategories(categoryDto);

        ResponseCategory responseCategory = mapper.map(categoryDto, ResponseCategory.class);

        return ResponseEntity.status(HttpStatus.OK).body(responseCategory);
    }

    @GetMapping("/categories")
    public ResponseEntity<List<ResponseCategory>> getCategories(){
        Iterable<CategoryEntity> cateList = categoryService.getAllCategorys();
        List<ResponseCategory> result = new ArrayList<>();

        cateList.forEach(v->{
            result.add(new ModelMapper().map(v, ResponseCategory.class));
        });

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}