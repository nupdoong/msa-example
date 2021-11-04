package com.example.userservice.service;

import com.example.userservice.dto.UserDto;
import com.example.userservice.entity.UserEntity;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    UserDto createUser(UserDto userDto);
    UserDto getUserByUserId(String userId);
    UserDto getUserDetailByEmail(String email);
    UserDto getUserByName(String name);
    UserDto updateUser(String userId, UserDto userDetail, Long id);

    /*전체 사용자 목록 반환*/
    Iterable<UserEntity> getUserByAll();

    UserDto deleteUser(int id, UserDto userDto);
}
