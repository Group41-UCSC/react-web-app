package lk.goldtroop.service;

import lk.goldtroop.entity.Tests;
import lk.goldtroop.repository.TestsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestsService {
    @Autowired
    private TestsRepository test;

    public List<Tests> listAll(){
        return test.findAll();
    }

    public void save(Tests tests){
        test.save(tests);
    }

    public Tests get(Integer id){
        return test.findById(id).get();
    }

    public void delete(Integer id){
        test.deleteById(id);
    }

}
