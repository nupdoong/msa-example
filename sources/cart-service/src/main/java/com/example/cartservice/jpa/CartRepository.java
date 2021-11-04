package com.example.cartservice.jpa;

import org.springframework.data.repository.CrudRepository;

public interface CartRepository extends CrudRepository<CartEntity, Long > {

    CartEntity findByUserId(String userId);

    CartEntity findByCartNo(Long cartNo);
}
