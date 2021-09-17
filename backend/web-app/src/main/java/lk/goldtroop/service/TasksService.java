package lk.goldtroop.service;

import lk.goldtroop.entity.Tasks;
import lk.goldtroop.repository.TasksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TasksService {
    @Autowired
    private TasksRepository task;

    public List<Tasks> listAll(){
        return task.findAll();
    }

    public void save(Tasks tasks){
        task.save(tasks);
    }

    public Tasks get(Integer id){
        return task.findById(id).get();
    }

    public void delete(Integer id){
        task.deleteById(id);
    }
}
