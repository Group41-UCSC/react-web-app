package lk.goldtroop.service;

import lk.goldtroop.entity.Event;
import lk.goldtroop.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {
    @Autowired
    private EventRepository repo;

    public List<Event> listAll(){
        return repo.findAll();
    }
    public void save(Event event){
        repo.save(event);
    }

    public Event get(Integer event_id){
        return repo.findById(event_id).get();
    }
    public void delete(Integer event_id){
        repo.deleteById(event_id);
    }
}