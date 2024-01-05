package vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.model;


import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Person {
    int id;
    String FullName;
    String Job;
    String Gender;
    String City;
    int Salary;
    LocalDate Birthday;
}
