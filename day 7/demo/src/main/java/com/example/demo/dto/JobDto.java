package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobDto {

    private int id;
    private String job_title;
    private String department;
    private String location;
    private String responsibility;
    private String category;

}
