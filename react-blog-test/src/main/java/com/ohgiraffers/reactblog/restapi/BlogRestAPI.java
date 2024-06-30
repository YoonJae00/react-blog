package com.ohgiraffers.reactblog.restapi;

import com.ohgiraffers.reactblog.dao.BlogRepository;
import com.ohgiraffers.reactblog.dao.UserRepository;
import com.ohgiraffers.reactblog.dto.BlogDTO;
import com.ohgiraffers.reactblog.dto.UserDTO;
import com.ohgiraffers.reactblog.entity.Blog;
import com.ohgiraffers.reactblog.service.BlogService;
import com.ohgiraffers.reactblog.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Tag(name = "springboot + react 블로그 restAPI 기능")
public class BlogRestAPI {

    @Autowired
    private BlogService blogService;

    @Autowired
    private UserService userService;


    @GetMapping("/blog")
    @Operation(summary = "전체 글 조회", description ="최초 메인페이지 전체 페이지 조회")
    public List<BlogDTO> getBlog() {
        List<BlogDTO> blogList = blogService.getblogList();
        return blogList;
    }

    @GetMapping("/blog/{userNo}")
    @Operation(summary = "특정 글 조회", description = "블로그 글 상세 조회")
    public BlogDTO getBlogByUserNo(@PathVariable("userNo") int userNo) {
        BlogDTO blog = blogService.getblog(userNo);
        System.out.println("blog = " + blog);
        return blog;
    }

    @PostMapping("/blog")
    @Operation(summary = "글 작성", description = "BlogDTO 를 이용한 글 작성")
    public ResponseEntity<?> createBlog(@RequestBody BlogDTO blogDTO) {
        System.out.println("blogDTO = " + blogDTO);
        blogService.registBlog(blogDTO);


        return ResponseEntity.ok().build();
    }

    @PostMapping("/regist")
    @Operation(summary = "회원가입", description = "UserDTO 를 이용한 회원가입")
    public ResponseEntity<?> regist(@RequestBody UserDTO userDTO){

        System.out.println("userDTO = " + userDTO);
        userService.regist(userDTO);

        return ResponseEntity.ok().build();
    }

    @GetMapping("/userform")
    @Operation(summary = "로그인" , description = "전체 정보를 쏴준후 react 상에서 조회")
    public List<UserDTO> getUserForm() {

        List<UserDTO> userList = userService.finduser();

        System.out.println("userList = " + userList);
        return userList;
    }

    @GetMapping("/blogs")
    @Operation(summary = "페이징" ,description = "페이징 기능 추가")
    public ResponseEntity<Page<BlogDTO>> getBlogs(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        System.out.println("page = " + page);

        Pageable pageable = PageRequest.of(page, size);
        Page<BlogDTO> blogDTOPage = blogService.findpaging(pageable);
        return new ResponseEntity<>(blogDTOPage, HttpStatus.OK);
    }

}
