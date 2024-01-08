package vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.dao;

import org.springframework.stereotype.Repository;
import vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.Data.PersonData;
import vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.model.Person;

import java.time.LocalDate;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
@Repository
public class Personlmpl implements PersonDao{

    @Override
    public void printListPeople(List<Person> persons) {
        persons.forEach(System.out::println);
    }

    @Override
    public List<Person> getAll() {
        return PersonData.personList.stream().toList();
    }

    @Override
    public List<Person> sortPeopleByFullName() {
        return PersonData.personList.stream().sorted((person1, person2) -> person1.getFullName().compareToIgnoreCase(person2.getFullName())).collect(Collectors.toList());
    }

    @Override
    public List<Person> sortPeopleByFullNameReversed() {
        return PersonData.personList.stream().sorted((person1, person2) -> person2.getFullName().compareToIgnoreCase(person1.getFullName())).collect(Collectors.toList());
    }

    @Override
    public List<String> getSortedJobs() {
        return PersonData.personList.stream().map(person -> person.getJob()).distinct().sorted().collect(Collectors.toList());
    }

    @Override
    public List<String> getSortedCities() {
        return PersonData.personList.stream().map(person -> person.getCity()).distinct().sorted().collect(Collectors.toList());
    }

    @Override
    public List<String> femaleNames() {
        return PersonData.personList.stream().filter(person -> person.getGender().equalsIgnoreCase("Female")).map(person -> person.getFullName()).collect(Collectors.toList());
    }

    @Override
    public Person highestEarner() {
        return PersonData.personList.stream().max(Comparator.comparingInt(Person::getSalary)).orElse(null);
    }

    @Override
    public List<Person> bornAfter1990() {
        return PersonData.personList.stream().filter(person -> person.getBirthday().getYear() < 1990).collect(Collectors.toList());
    }

    @Override
    public double averageSalary() {
        return (double) PersonData.personList.stream().map(person -> person.getSalary()).reduce(0, (sum, salary) -> sum + salary, Integer::sum) / PersonData.personList.size();
    }

    @Override
    public double averageAge() {
        return (double) PersonData.personList.stream().map(person -> LocalDate.now().getYear() - person.getBirthday().getYear()).reduce(0, (sum, age) -> sum + age, Integer::sum) / PersonData.personList.size();
    }

    @Override
    public List<Person> nameContains(String keyword) {
        return PersonData.personList.stream().filter(person -> person.getFullName().contains(keyword)).collect(Collectors.toList());
    }

    @Override
    public List<Person> sortedByAgeForMale() {
        return PersonData.personList.stream().filter(person -> person.getGender().equalsIgnoreCase("Male")).sorted(Comparator.comparingInt(person -> person.getBirthday().getYear())).collect(Collectors.toList());
    }

    @Override
    public Person longestName() {
        return PersonData.personList.stream().max(Comparator.comparing(person -> person.getFullName().length())).orElse(null);
    }

    @Override
    public List<Person> aboveAverageSalary() {
        double averageSalary = averageSalary();
        return PersonData.personList.stream().filter(person -> person.getSalary() > averageSalary).collect(Collectors.toList());
    }

    @Override
    public Map<String, List<Person>> groupPeopleByCity() {
        return PersonData.personList.stream().collect(Collectors.groupingBy(Person::getCity));
    }

    @Override
    public Map<String, Long> groupJobByCount() {
        return PersonData.personList.stream().collect(Collectors.groupingBy(Person::getJob, Collectors.counting()));
    }

    @Override
    public List<Person> inSalaryRange(int start, int end) {
        return PersonData.personList.stream().filter(person -> person.getSalary() >= start && person.getSalary() <= end).collect(Collectors.toList());
    }

    @Override
    public List<Person> startsWith(String prefix) {
        return PersonData.personList.stream().filter(person -> person.getFullName().startsWith(prefix)).collect(Collectors.toList());
    }

    @Override
    public List<Person> sortByBirthYearDescending() {
        return PersonData.personList.stream().sorted((Comparator.comparingInt(person -> person.getBirthday().getYear()))).collect(Collectors.toList());
    }

    @Override
    public List<Person> top5HighestPaid() {
        return PersonData.personList.stream().sorted((Comparator.comparingInt(Person::getSalary).reversed())).limit(5).collect(Collectors.toList());
    }

    @Override
    public List<Person> inAgeRange(int start, int end) {
        return PersonData.personList.stream().filter(person -> LocalDate.now().getYear() - person.getBirthday().getYear() >= start && LocalDate.now().getYear() - person.getBirthday().getYear() <= end).collect(Collectors.toList());
    }
}
