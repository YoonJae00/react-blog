package com.ohgiraffers.reactblog.dto;

import lombok.*;
import org.springframework.cglib.core.Local;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class BlogDTO {

    private int blogCode;

    private String blogAuthor;

    private String blogDetail;

    private String blogImg;

    private String blogSummary;

    private String blogTitle;

    private LocalDateTime endTime;

    private LocalDateTime startTime;
}
