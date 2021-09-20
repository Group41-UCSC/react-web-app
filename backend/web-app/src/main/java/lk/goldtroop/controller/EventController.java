package lk.goldtroop.controller;

import lk.goldtroop.entity.Event;
import lk.goldtroop.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class EventController {
    @Autowired
    private EventService service;

    @GetMapping("/events")
    public List<Event> list(){
        return service.listAll();
    }

    @GetMapping("/events/{event_id}")
    public ResponseEntity<Event> get(@PathVariable Integer event_id){
        try{
            Event event=service.get(event_id);
            return new ResponseEntity<Event>(event, HttpStatus.OK);
        } catch(NoSuchElementException e){
            return new ResponseEntity<Event>(HttpStatus.NOT_FOUND);
        }

    }


    @PostMapping("/add-event")
    public void add(@RequestBody Event event){
        service.save(event);
    }

    @PutMapping("/update-event/{event_id}")
    public ResponseEntity<?> update(@RequestBody Event event, @PathVariable Integer event_id){
        try {
            Event existEvent= service.get(event_id);
            existEvent.setEventTitle(event.getEventTitle());
            existEvent.setEventDescription(event.getEventDescription());
            existEvent.setEventChildId(event.getEventChildId());
            existEvent.setEventCategory(event.getEventCategory());
            existEvent.setEventStatus(event.getEventStatus());
            existEvent.setEventFeedback(event.getEventFeedback());
            service.save(existEvent);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete-event/{id}")
    public void delete(@PathVariable Integer id){
        service.delete(id);
    }
}
