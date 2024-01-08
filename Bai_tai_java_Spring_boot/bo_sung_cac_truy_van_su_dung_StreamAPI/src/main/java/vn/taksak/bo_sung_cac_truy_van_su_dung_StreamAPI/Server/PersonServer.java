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
    private PersonDao personDAO;

    public void printListPeople() {
        personDAO.printListPeople(PersonData.personList);
    }

    public List<Person> getAll() {

        return personDAO.getAll();
    }

    public List<Person> sortPeopleByFullName() {
        return personDAO.sortPeopleByFullName();
    }

    public List<Person> sortPeopleByFullNameReversed() {
        return personDAO.sortPeopleByFullNameReversed();
    }

    public List<String> getSortedJobs() {
        return personDAO.getSortedJobs();
    }

    public List<String> getSortedCities() {
        return personDAO.getSortedCities();
    }

    public List<String> femaleNames() {
        return personDAO.femaleNames();
    }

    public Person highestEarner() {
        return personDAO.highestEarner();
    }

    public List<Person> bornAfter1990() {
        return personDAO.bornAfter1990();
    }

    public double averageSalary() {
        return personDAO.averageSalary();
    }

    public double averageAge() {
        return personDAO.averageAge();
    }

    public List<Person> nameContains(String keyword) {
        return personDAO.nameContains(keyword);
    }

    public List<Person> sortedByAgeForMale() {
        return personDAO.sortedByAgeForMale();
    }

    public Person longestName() {
        return personDAO.longestName();
    }

    public List<Person> aboveAverageSalary() {
        return personDAO.aboveAverageSalary();
    }

    public Map<String, List<Person>> groupPeopleByCity() {
        return personDAO.groupPeopleByCity();
    }

    public Map<String, Long> groupJobByCount() {
        return personDAO.groupJobByCount();
    }

    public List<Person> inSalaryRange(int start, int end) {
        return personDAO.inSalaryRange(start, end);
    }

    public List<Person> startsWith(String prefix) {
        return personDAO.startsWith(prefix);
    }

    public List<Person> sortByBirthYearDescending() {
        return personDAO.sortByBirthYearDescending();
    }

    public List<Person> top5HighestPaid() {
        return personDAO.top5HighestPaid();
    }

    public List<Person> inAgeRange(int start, int end) {
        return personDAO.inAgeRange(start, end);
    }
}