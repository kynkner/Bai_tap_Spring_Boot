package vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.utils;

import org.springframework.stereotype.Component;
import org.w3c.dom.css.CSSPrimitiveValue;
import vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.model.Person;

import java.io.IOException;
import java.util.List;
@Component
public class CSVReader implements IFileReader{

    @Override
    public List<Person> readFile(String name)  {
        return null;
    }
}
