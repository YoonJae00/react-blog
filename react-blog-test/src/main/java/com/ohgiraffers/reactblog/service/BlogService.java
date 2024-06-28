package com.ohgiraffers.reactblog.service;

import com.ohgiraffers.reactblog.dao.BlogRepository;
import com.ohgiraffers.reactblog.dto.BlogDTO;
import com.ohgiraffers.reactblog.entity.Blog;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BlogService {

    private final BlogRepository blogRepository;
    private final ModelMapper modelMapper;

    public List<BlogDTO> getblogList() {
        List<Blog> blogs = blogRepository.findAll();

        return blogs.stream()
                .map(blog -> modelMapper.map(blog, BlogDTO.class))
                .collect(Collectors.toList());
    }
}