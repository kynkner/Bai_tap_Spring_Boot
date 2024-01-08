package vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.Server.PersonServer;
import vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.model.Person;

import java.util.List;
import java.util.Map;

@Controller
public class PersonController {

    @Autowired
    private PersonServer personService;
    @GetMapping("")
    public String getHome() {
        return "index";
    }

    @GetMapping("/getAll")
    public String getAll(Model model) {
        model.addAttribute("personList", personService.getAll());
        return "link1";
    }

    @GetMapping("/sortPeopleByFullName")
    public String sortPeopleByFullName(Model model) {
        model.addAttribute("personList", personService.sortPeopleByFullName());
        return "link2";
    }

    @GetMapping("/sortPeopleByFullNameReversed")
    public ResponseEntity<List<Person>> sortPeopleByFullNameReversed() {
        return new ResponseEntity<>(personService.sortPeopleByFullNameReversed(), HttpStatus.OK);
    }

    @GetMapping("/getSortedJobs")
    public String getSortedJobs(Model model) {
        model.addAttribute("jobList", personService.getSortedJobs());
        return "link3";
    }

    @GetMapping("/getSortedCities")
    public String getSortedCities(Model model) {
        model.addAttribute("cities", personService.getSortedCities());
        return "link4";
    }

    @GetMapping("/femaleNames")
    public ResponseEntity<List<String>> femaleNames() {
        return new ResponseEntity<>(personService.femaleNames(), HttpStatus.OK);
    }

    @GetMapping("/highestEarner")
    public ResponseEntity<Person> highestEarner() {
        return new ResponseEntity<>(personService.highestEarner(), HttpStatus.OK);
    }

    @GetMapping("/bornAfter1990")
    public ResponseEntity<List<Person>> bornAfter1990() {
        return new ResponseEntity<>(personService.bornAfter1990(), HttpStatus.OK);
    }

    @GetMapping("/averageSalary")
    public ResponseEntity<Double> averageSalary() {
        return new ResponseEntity<>(personService.averageSalary(), HttpStatus.OK);
    }

    @GetMapping("/averageAge")
    public ResponseEntity<Double> averageAge() {
        return new ResponseEntity<>(personService.averageAge(), HttpStatus.OK);
    }

    @GetMapping("/nameContains/{keyword}")
    public ResponseEntity<List<Person>> nameContains(@PathVariable String keyword) {
        return new ResponseEntity<>(personService.nameContains(keyword), HttpStatus.OK);
    }

    @GetMapping("/sortedByAgeForMale")
    public ResponseEntity<List<Person>> sortedByAgeForMale() {
        return new ResponseEntity<>(personService.sortedByAgeForMale(), HttpStatus.OK);
    }

    @GetMapping("/longestName")
    public String longestName(Model model) {
        model.addAttribute("person", personService.longestName());
        return "link8";
    }

    @GetMapping("/aboveAverageSalary")
    public String aboveAverageSalary(Model model) {
        model.addAttribute("personList", personService.aboveAverageSalary());
        return "link7";
    }

    @GetMapping("/groupPeopleByCity")
    public String groupPeopleByCity(Model model) {
        Map<String, List<Person>> mapPeopleByCity = personService.groupPeopleByCity();
        model.addAttribute("mapPeopleByCity", mapPeopleByCity);
        return "link5";
    }

    @GetMapping("/groupJobByCount")
    public String groupJobByCount(Model model) {
        Map<String, Long> mapJobByCount = personService.groupJobByCount();
        model.addAttribute("mapJobByCount", mapJobByCount);
        return "link6";
    }

    @GetMapping("/inSalaryRange")
    public ResponseEntity<List<Person>> inSalaryRange(@RequestParam int start, @RequestParam int end) {
        return new ResponseEntity<>(personService.inSalaryRange(start, end), HttpStatus.OK);
    }

    @GetMapping("/startsWith/{prefix}")
    public ResponseEntity<List<Person>> startsWith(@PathVariable String prefix) {
        return new ResponseEntity<>(personService.startsWith(prefix), HttpStatus.OK);
    }

    @GetMapping("/sortByBirthYearDescending")
    public ResponseEntity<List<Person>> sortByBirthYearDescending() {
        return new ResponseEntity<>(personService.sortByBirthYearDescending(), HttpStatus.OK);
    }

    @GetMapping("/top5HighestPaid")
    public ResponseEntity<List<Person>> top5HighestPaid() {
        return new ResponseEntity<>(personService.top5HighestPaid(), HttpStatus.OK);
    }

    @GetMapping("/inAgeRange")
    public ResponseEntity<List<Person>> inAgeRange(@RequestParam int start, @RequestParam int end) {
        return new ResponseEntity<>(personService.inAgeRange(start, end), HttpStatus.OK);
    }
}
