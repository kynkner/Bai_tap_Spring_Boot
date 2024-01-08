package vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.Data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.stereotype.Component;
import vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.model.Person;
import vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.utils.IFileReader;

import java.util.Arrays;
import java.util.List;

@Configuration
public class InitData implements CommandLineRunner {
    @Autowired
    private IFileReader fileReader;

    private  final String personData = "D:\\Springboot-techmaster\\Bai_tap_Spring_Boot\\Bai_tai_java_Spring_boot\\bo_sung_cac_truy_van_su_dung_StreamAPI\\src\\main\\resources\\MOCK_DATA.csv";
    @Override
    public void run(String... args){
        PersonData.personList = loadDataFromCSV(personData);
        System.out.println("so luong" + PersonData.personList.size());
    }

    private List<Person> loadDataFromCSV(String personData) {
        return fileReader.readFile(personData);
    }
}
