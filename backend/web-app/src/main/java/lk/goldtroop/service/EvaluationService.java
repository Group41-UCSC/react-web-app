package lk.goldtroop.service;

import lk.goldtroop.entity.Evaluation;
import lk.goldtroop.repository.EvaluationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EvaluationService {

    @Autowired
    public EvaluationRepository repo;

    public List<Evaluation> listAll(){
        return repo.findAll();
    }
    public void save(Evaluation evaluation){
        repo.save(evaluation);
    }

    public Evaluation get(Integer evaluation_id){
        return repo.findById(evaluation_id).get();
    }
    public void delete(Integer evaluation_id){
        repo.deleteById(evaluation_id);
    }
}
