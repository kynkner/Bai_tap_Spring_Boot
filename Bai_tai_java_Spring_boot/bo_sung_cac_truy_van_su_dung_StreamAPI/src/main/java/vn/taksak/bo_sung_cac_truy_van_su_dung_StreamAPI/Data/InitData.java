package vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.Data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.model.Person;
import vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.utils.IFileReader;

import java.util.List;

@Configuration
public class InitData implements CommandLineRunner {
    @Autowired
    private IFileReader fileReader;

    private  final String personData = "./MOCK_DATA.csv";
    @Override
    public void run(String... args) throws Exception {
        PersonData.personList = loadDataFromCSV(personData);

    }

    private List<Person> loadDataFromCSV(String personData) {
        return fileReader.readFile(personData);
    }
}
