package com.ohgiraffers.reactblog.service;

import com.ohgiraffers.reactblog.dao.UserRepository;
import com.ohgiraffers.reactblog.dto.BlogDTO;
import com.ohgiraffers.reactblog.dto.UserDTO;
import com.ohgiraffers.reactblog.embedded.Status;
import com.ohgiraffers.reactblog.embedded.Time;
import com.ohgiraffers.reactblog.entity.User;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    @Autowired
    private UserRepository userRepository;
    private final ModelMapper modelMapper;

    @Transactional
    public void regist(UserDTO userDTO) {
        User user = new User(userDTO.getUserId(), userDTO.getUserPw(), userDTO.getUserName(), userDTO.getUserGender(),
                new Status("Y"),
                new Time(LocalDateTime.now(),null));

        userRepository.save(user);
    }

    public List<UserDTO> finduser() {
        List<User> users = userRepository.findAll();


        return users.stream().map(user -> modelMapper.map(user, UserDTO.class)).collect(Collectors.toList());
    }
}
