package com.ohgiraffers.reactblog.embedded;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Embeddable
@NoArgsConstructor
@AllArgsConstructor
public class Status {

    @Column(name = "status")
//    @ColumnDefault("'Y'")
    private String status;
}
