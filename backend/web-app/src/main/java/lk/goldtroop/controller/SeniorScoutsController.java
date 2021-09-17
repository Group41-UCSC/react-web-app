package lk.goldtroop.controller;

import lk.goldtroop.entity.SeniorScouts;
import lk.goldtroop.service.SeniorScoutsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
public class SeniorScoutsController {
    @Autowired
    private SeniorScoutsService service;

    @GetMapping("/view-senior-scouts")
    public List<SeniorScouts> list(){
        return service.listAll();
    }

    @GetMapping("/view-senior-scouts/{id}")
    public ResponseEntity<SeniorScouts> get(@PathVariable Integer id){
        try {
            SeniorScouts seniorscouts = service.get(id);
            return new ResponseEntity<SeniorScouts>(seniorscouts, HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<SeniorScouts>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add-senior-scouts")
    public void add(@RequestBody SeniorScouts seniorscouts){
        service.save(seniorscouts);
    }

    @PutMapping("/update-senior-scouts/{id}")
    public ResponseEntity<?> update(@RequestBody SeniorScouts seniorscouts,
                                    @PathVariable Integer id){
        try {
            SeniorScouts existSeniorScout = service.get(id);
            existSeniorScout.setPreferredName(seniorscouts.getPreferredName());
            existSeniorScout.setFatherName(seniorscouts.getFatherName());
            existSeniorScout.setFatherOccupation(seniorscouts.getFatherOccupation());
            existSeniorScout.setFatherContact(seniorscouts.getFatherContact());
            existSeniorScout.setMotherName(seniorscouts.getMotherName());
            existSeniorScout.setMotherContact(seniorscouts.getMotherContact());
            existSeniorScout.setSpecialRoles(seniorscouts.getSpecialRoles());
            service.save(existSeniorScout);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete-senior-scouts/{id}")
    public void delete(@PathVariable Integer id){
        service.delete(id);
    }
}
