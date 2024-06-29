package com.ohgiraffers.reactblog.restapi;

import com.ohgiraffers.reactblog.dao.BlogRepository;
import com.ohgiraffers.reactblog.dao.UserRepository;
import com.ohgiraffers.reactblog.dto.BlogDTO;
import com.ohgiraffers.reactblog.dto.UserDTO;
import com.ohgiraffers.reactblog.entity.Blog;
import com.ohgiraffers.reactblog.service.BlogService;
import com.ohgiraffers.reactblog.service.UserService;
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
public class BlogRestAPI {

    @Autowired
    private BlogService blogService;

    @Autowired
    private UserService userService;

    @Autowired
    private BlogRepository blogRepository;

    private final ModelMapper modelMapper;

    @GetMapping("/blog")
    public List<BlogDTO> getBlog() {
        List<BlogDTO> blogList = blogService.getblogList();
        return blogList;
    }

    @GetMapping("/blog/{userNo}")
    public BlogDTO getBlogByUserNo(@PathVariable("userNo") int userNo) {
        BlogDTO blog = blogService.getblog(userNo);
        return blog;
    }

    @PostMapping("/blog")
    public ResponseEntity<?> createBlog(@RequestBody BlogDTO blogDTO) {
        System.out.println("blogDTO = " + blogDTO);
        blogService.registBlog(blogDTO);


        return ResponseEntity.ok().build();
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

    @GetMapping("/blogs")
    public ResponseEntity<Page<BlogDTO>> getBlogs(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        System.out.println("page = " + page);
        Pageable pageable = PageRequest.of(page, size);
        Page<Blog> blogPage = blogRepository.findAll(pageable);
        Page<BlogDTO> blogDTOPage = blogPage.map(blog -> modelMapper.map(blog, BlogDTO.class));
        return new ResponseEntity<>(blogDTOPage, HttpStatus.OK);
    }

}
