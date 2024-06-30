package com.ohgiraffers.reactblog.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import org.springframework.cglib.core.Local;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Schema(description = "블로그 관련 DTO")
public class BlogDTO {

    @Schema(description = "블로그 글 번호")
    private int blogCode;

    @Schema(description = "블로그 글 작성자(회원정보 이름)")
    private String blogAuthor;

    @Schema(description = "블로그 글 내용")
    private String blogDetail;


    @Schema(description = "블로그 글 이미지 URL")
    private String blogImg;

    @Schema(description = "블로그 요약 정보")
    private String blogSummary;

    @Schema(description = "블로그 제목")
    private String blogTitle;

    @Schema(description = "수정 시간")
    private LocalDateTime endTime;

    @Schema(description = "글 작성 시간")
    private LocalDateTime startTime;
}
