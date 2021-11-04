package com.example.catalogservice.service;

import com.example.catalogservice.dto.CatalogDto;
import com.example.catalogservice.entity.CatalogEntity;
import com.example.catalogservice.jpa.CatalogRepository;
import javassist.NotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;

@Service
@Slf4j
public class CatalogServiceImpl implements CatalogService{
    CatalogRepository repository;

    Environment env;

    @Autowired
    public CatalogServiceImpl(CatalogRepository repository,
                              Environment env){
        this.repository = repository;
        this.env = env;
    }

    @Override
    public Iterable<CatalogEntity> getAllCatalogs() {
        return repository.findAll();
    }

    //category별 상품 리스트 조회
    @Override
    public Iterable<CatalogEntity> getCateCatalog(Integer cateNo) {
        return repository.findAll();
    }

    //상품 삭제 By productId
    @Override
    public String deleteCatalog(Long id) {
        CatalogEntity catalogEntity = repository.findByProductId(id);
        if(catalogEntity == null){
            log.info("ProductId not Found"+id);
        }
        repository.delete(catalogEntity);
        String result = "Delete OK!";
        return result;
    }

    //상품 수정
    @Override
    public CatalogDto updateCatalog(Long id, CatalogDto catalogDetail) {
        Date now = new Date();
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        CatalogEntity catalogEntity = repository.findByProductId(id);
        if(catalogEntity == null){
            try {
                log.info("ProductId not Found"+id);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        CatalogDto catalogDto = mapper.map(catalogEntity, CatalogDto.class);

        catalogDto.setProductId(catalogEntity.getProductId());
        //예외처리
        if(catalogDetail.getCateNo() == null){
            catalogDto.setCateNo(catalogEntity.getCateNo());
        }
        else{
            catalogDto.setCateNo(catalogDetail.getCateNo());
        }

        catalogDto.setProductName(catalogDetail.getProductName());
        catalogDto.setQty(catalogDetail.getQty());
        catalogDto.setUnitPrice(catalogDetail.getUnitPrice());

        if(catalogDetail.getDetail() == null){
            catalogDto.setDetail(catalogEntity.getDetail());
        }
        else{
            catalogDto.setDetail(catalogDetail.getDetail());
        }
        if(catalogDetail.getFilename() == null){
            catalogDto.setFilename(catalogDetail.getFilename());
        }
        else{
            catalogDto.setFilename(catalogDetail.getFilename());
        }
        try {
            catalogDto.setModifiedAt(dateFormat.parse(dateFormat.format(now)));
        } catch (ParseException e) {
            e.printStackTrace();
        }

        catalogEntity = mapper.map(catalogDto, CatalogEntity.class);
        repository.save(catalogEntity);

        return catalogDto;
    }

    @Override
    public CatalogEntity getCatalog(Long id) {
        return repository.findByProductId(id);
    }

    @Override
    public CatalogEntity getCatalogByName(String productName) {
        return repository.findByProductName(productName);
    }


    //(관리자) 책 등록
    @Override
    public CatalogDto createCatalog(CatalogDto catalogDto) {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        CatalogEntity catalogEntity = mapper.map(catalogDto, CatalogEntity.class);
        repository.save(catalogEntity);

        CatalogDto catalogVO = mapper.map(catalogEntity, CatalogDto.class);
        return catalogVO;
    }


}
