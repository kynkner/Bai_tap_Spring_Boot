package vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.Server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.Data.PersonData;
import vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.dao.PersonDao;
import vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.model.Person;




import java.util.List;
import java.util.Map;

@Service
public class PersonServer {
    @Autowired
    private PersonDao personDao;

    public void printListPeople() {
        personDao.printListPeople(PersonData.personList);
    }

    public List<Person> getAll() {
        return personDao.getAll();
    }

    public List<Person> sortPeopleByFullName() {
        return personDao.sortPeopleByFullName();
    }

    public List<Person> sortPeopleByFullNameReversed() {
        return personDao.sortPeopleByFullNameReversed();
    }

    public List<String> getSortedJobs() {
        return personDao.getSortedJobs();
    }

    public List<String> getSortedCities() {
        return personDao.getSortedCities();
    }

    public List<String> femaleNames() {
        return personDao.femaleNames();
    }

    public Person highestEarner() {
        return personDao.highestEarner();
    }

    public List<Person> bornAfter1990() {
        return personDao.bornAfter1990();
    }

    public double averageSalary() {
        return personDao.averageSalary();
    }

    public double averageAge() {
        return personDao.averageAge();
    }

    public List<Person> nameContains(String keyword) {
        return personDao.nameContains(keyword);
    }

    public List<Person> sortedByAgeForMale() {
        return personDao.sortedByAgeForMale();
    }

    public Person longestName() {
        return personDao.longestName();
    }

    public List<Person> aboveAverageSalary() {
        return personDao.aboveAverageSalary();
    }

    public Map<String, List<Person>> groupPeopleByCity() {
        return personDao.groupPeopleByCity();
    }

    public Map<String, Long> groupJobByCount() {
        return personDao.groupJobByCount();
    }

    public List<Person> inSalaryRange(int start, int end) {
        return personDao.inSalaryRange(start, end);
    }

    public List<Person> startsWith(String prefix) {
        return personDao.startsWith(prefix);
    }

    public List<Person> sortByBirthYearDescending() {
        return personDao.sortByBirthYearDescending();
    }

    public List<Person> top5HighestPaid() {
        return personDao.top5HighestPaid();
    }

    public List<Person> inAgeRange(int start, int end) {
        return personDao.inAgeRange(start, end);
    }
}
