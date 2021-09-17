package lk.goldtroop.controller;

import lk.goldtroop.entity.Tests;
import lk.goldtroop.service.TestsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
public class TestsController {
    @Autowired
    private TestsService service;

    @GetMapping("/view-tests")
    public List<Tests> list(){
        return service.listAll();
    }

    @GetMapping("/view-tests/{id}")
    public ResponseEntity<Tests> get(@PathVariable Integer id){
        try {
            Tests tests = service.get(id);
            return new ResponseEntity<Tests>(tests, HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<Tests>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add-tests")
    public void add(@RequestBody Tests tests){
        service.save(tests);
    }

    @PutMapping("/update-tests/{id}")
    public ResponseEntity<?> update(@RequestBody Tests tests,
                                    @PathVariable Integer id){
        try {
            Tests existTest = service.get(id);
            existTest.setTestName(tests.getTestName());
            existTest.setTestDescription(tests.getTestDescription());
            existTest.setVersion(tests.getVersion());
            service.save(existTest);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete-tests/{id}")
    public void delete(@PathVariable Integer id){
        service.delete(id);
    }
}
