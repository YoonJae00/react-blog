package com.ohgiraffers.reactblog.dao;

import com.ohgiraffers.reactblog.entity.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Blog, Integer> {
}
