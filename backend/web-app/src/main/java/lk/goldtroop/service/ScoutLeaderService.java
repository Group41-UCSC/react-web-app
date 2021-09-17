package lk.goldtroop.service;

import lk.goldtroop.entity.ScoutLeaders;
import lk.goldtroop.repository.ScoutLeadersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScoutLeaderService {
    @Autowired
    private ScoutLeadersRepository scout;

    public List<ScoutLeaders> listAll(){
        return scout.findAll();
    }

    public void save(ScoutLeaders scoutleaders){
        scout.save(scoutleaders);
    }

    public ScoutLeaders get(Integer id){
        return scout.findById(id).get();
    }

    public void delete(Integer id){
        scout.deleteById(id);
    }
}
