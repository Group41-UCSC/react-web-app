package lk.goldtroop.service;

import lk.goldtroop.entity.SeniorScouts;
import lk.goldtroop.repository.SeniorScoutsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeniorScoutsService {
    @Autowired
    private SeniorScoutsRepository senior;

    public List<SeniorScouts> listAll(){
        return senior.findAll();
    }

    public void save(SeniorScouts seniorscouts){
        senior.save(seniorscouts);
    }

    public SeniorScouts get(Integer id){
        return senior.findById(id).get();
    }

    public void delete(Integer id){
        senior.deleteById(id);
    }
}
