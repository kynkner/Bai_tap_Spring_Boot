package vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.utils;

import vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.model.Person;

import java.util.List;

public interface IFileReader {
    List<Person> readFile(String name);
}
