package vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.utils;

import com.opencsv.exceptions.CsvException;
import jakarta.annotation.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;
import vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.model.Person;

import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
@Component
public class CSVReader implements IFileReader{
    @Override
    public List<Person> readFile(String fileName) {
        com.opencsv.CSVReader csvReader;
        List<Person> listBook = new ArrayList<>();

        try {
            FileReader fileReader = new FileReader(fileName);
            csvReader = new com.opencsv.CSVReader(fileReader);

            if (csvReader.readNext() != null) {
                String[] line;

                while ((line = csvReader.readNext()) != null) {
                    int id = Integer.parseInt(line[0]);
                    String FullName = line[1];
                    String Job = line[2];
                    String Gender = line[3];
                    String City = line[4];
                    int Salary = Integer.parseInt(line[5]);

                    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
                    LocalDate Birthday = LocalDate.parse(line[6], formatter);

                    Person newBook = new Person(id, FullName, Job, Gender, City, Salary, Birthday);
                    listBook.add(newBook);
                }
            } else {
                throw new RuntimeException("Empty CSV file");
            }

            csvReader.close();
        } catch (IOException | CsvException e) {
            throw new RuntimeException(e);
        }

        return listBook;
    }
}
