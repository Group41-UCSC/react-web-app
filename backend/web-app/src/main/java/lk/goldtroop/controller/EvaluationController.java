package lk.goldtroop.controller;

import lk.goldtroop.entity.Evaluation;
import lk.goldtroop.service.EvaluationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.NoSuchElementException;

@RestController
public class EvaluationController {
    @Autowired
    private EvaluationService service;

    @GetMapping("/evaluations")
    public List<Evaluation> list(){
        return service.listAll();
    }

    @GetMapping("/evaluations/{evaluation_id}")
    public ResponseEntity<Evaluation> get(@PathVariable Integer evaluation_id){
        try{
            Evaluation evaluation=service.get(evaluation_id);
            return new ResponseEntity<Evaluation>(evaluation, HttpStatus.OK);
        } catch(NoSuchElementException e){
            return new ResponseEntity<Evaluation>(HttpStatus.NOT_FOUND);
        }

    }


    @PostMapping("/add-evaluation")
    public void add(@RequestBody Evaluation evaluation){
        service.save(evaluation);
    }

    @PutMapping("/update-evaluation/{evaluation_id}")
    public ResponseEntity<?> update(@RequestBody Evaluation evaluation, @PathVariable Integer evaluvation_id){
        try {
            Evaluation existEvaluation= service.get(evaluvation_id);
            existEvaluation.setEvaluvationTitle(evaluation.getEvaluvationTitle());
            existEvaluation.setEvaluvationVersion(evaluation.getEvaluvationVersion());
            existEvaluation.setEvaluvationStartdate(evaluation.getEvaluvationStartdate());
            existEvaluation.setEvaluvationEnddate(evaluation.getEvaluvationEnddate());
            service.save(existEvaluation);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete-evaluation/{id}")
    public void delete(@PathVariable Integer id){
        service.delete(id);
    }
}
