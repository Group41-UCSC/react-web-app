package lk.goldtroop.controller;

import lk.goldtroop.entity.Tasks;
import lk.goldtroop.service.TasksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
public class TasksController {
    @Autowired
    private TasksService service;

    @GetMapping("/view-tasks")
    public List<Tasks> list(){
        return service.listAll();
    }

    @GetMapping("/view-tasks/{id}")
    public ResponseEntity<Tasks> get(@PathVariable Integer id){
        try {
            Tasks tasks = service.get(id);
            return new ResponseEntity<Tasks>(tasks, HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<Tasks>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add-tasks")
    public void add(@RequestBody Tasks tasks){
        service.save(tasks);
    }

    @PutMapping("/update-tasks/{id}")
    public ResponseEntity<?> update(@RequestBody Tasks tasks,
                                    @PathVariable Integer id){
        try {
            Tasks existTask = service.get(id);
            existTask.setTaskName(tasks.getTaskName());
            existTask.setChildTaskId(tasks.getChildTaskId());
            existTask.setTaskType(tasks.getTaskType());
            existTask.setTaskDescription(tasks.getTaskDescription());
            existTask.setTaskCategory(tasks.getTaskCategory());
            existTask.setThingsNeeded(tasks.getThingsNeeded());
            existTask.setStatus(tasks.getStatus());
            existTask.setExperiencePoints(tasks.getExperiencePoints());
            existTask.setEventId(tasks.getEventId());
            service.save(existTask);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete-tasks/{id}")
    public void delete(@PathVariable Integer id){
        service.delete(id);
    }
}
