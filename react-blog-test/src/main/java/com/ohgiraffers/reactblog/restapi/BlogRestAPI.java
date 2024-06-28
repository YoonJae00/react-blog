package com.ohgiraffers.reactblog.restapi;

import com.ohgiraffers.reactblog.dto.BlogDTO;
import com.ohgiraffers.reactblog.dto.UserDTO;
import com.ohgiraffers.reactblog.service.BlogService;
import com.ohgiraffers.reactblog.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class BlogRestAPI {

    @Autowired
    private BlogService blogService;

    @Autowired
    private UserService userService;

    @GetMapping("/blog")
    public List<BlogDTO> getBlog() {
        List<BlogDTO> blogList = blogService.getblogList();
        System.out.println("blogList = " + blogList);
        return blogList;
    }

    @PostMapping("/regist")
    public ResponseEntity<?> regist(@RequestBody UserDTO userDTO){

        System.out.println("userDTO = " + userDTO);
        userService.regist(userDTO);

        return ResponseEntity.ok().build();
    }

    @GetMapping("/userform")
    public List<UserDTO> getUserForm() {

        List<UserDTO> userList = userService.finduser();

        System.out.println("userList = " + userList);
        return userList;
    }

}
