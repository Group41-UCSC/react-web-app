package lk.goldtroop.controller;

import lk.goldtroop.entity.ScoutLeaders;
import lk.goldtroop.service.ScoutLeaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
public class ScoutLeadersController {
    @Autowired
    private ScoutLeaderService service;

    @GetMapping("/view-scout-leaders")
    public List<ScoutLeaders> list(){
        return service.listAll();
    }

    @GetMapping("/view-scout-leaders/{id}")
    public ResponseEntity<ScoutLeaders> get(@PathVariable Integer id){
        try {
            ScoutLeaders scoutleaders = service.get(id);
            return new ResponseEntity<ScoutLeaders>(scoutleaders, HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<ScoutLeaders>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add-scout-leaders")
    public void add(@RequestBody ScoutLeaders scoutleaders){
        service.save(scoutleaders);
    }

    @PutMapping("/update-scout-leaders/{id}")
    public ResponseEntity<?> update(@RequestBody ScoutLeaders scoutleaders,
                                    @PathVariable Integer id){
        try {
            ScoutLeaders existScoutLeader = service.get(id);
            existScoutLeader.setPreferredName(scoutleaders.getPreferredName());
            existScoutLeader.setWarrantNum(scoutleaders.getWarrantNum());
            existScoutLeader.setLeaderType(scoutleaders.getLeaderType());
            service.save(existScoutLeader);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete-scout-leaders/{id}")
    public void delete(@PathVariable Integer id){
        service.delete(id);
    }
}
