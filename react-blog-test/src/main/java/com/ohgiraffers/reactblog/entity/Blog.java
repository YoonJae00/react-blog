package com.ohgiraffers.reactblog.entity;

import com.ohgiraffers.reactblog.embedded.Time;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.sql.Date;

@Entity
@Table(name = "tbl_blog")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
public class Blog {

    @Id
    @Column(name = "blog_code")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int blogCode;

    @Column(name = "blog_title")
    private String blogTitle;

    @Column(name = "blog_author")
    private String blogAuthor;

    @Embedded
    private Time time;

    @Column(name = "blog_summary")
    private String blogSummary;

    @Column(name = "blog_img")
    private String blogImg;

    @Column(name = "blog_detail")
    private String blogDetail;



}
