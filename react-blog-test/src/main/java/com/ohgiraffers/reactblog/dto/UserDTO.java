package com.ohgiraffers.reactblog.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Schema(description = "회원정보 관련 DTO")
public class UserDTO {

    @Schema(description = "회원번호 (PK)")
    private int userCode;
    @Schema(description = "회원 아이디")
    private String userId;
    @Schema(description = "회원 비밀번호")
    private String userPw;
    @Schema(description = "회원 이름")
    private String userName;
    @Schema(description = "회원 성별")
    private String userGender;
    @Schema(description = "회원 상태")
    private String status;
    @Schema(description = "회원가입 날짜")
    private LocalDateTime startTime;

}
