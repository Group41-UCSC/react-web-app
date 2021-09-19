package lk.goldtroop.controller;

import lk.goldtroop.entity.Content;
import lk.goldtroop.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin("*")
@RestController
public class ContentController {
    @Autowired
    private ContentService service;

    @GetMapping("/contents")
    public List<Content> list(){
        return service.listAll();
    }

    @GetMapping("/contents/{content_id}")
    public ResponseEntity<Content> get(@PathVariable Integer content_id){
        try{
            Content content=service.get(content_id);
            return new ResponseEntity<Content>(content, HttpStatus.OK);
        } catch(NoSuchElementException e){
            return new ResponseEntity<Content>(HttpStatus.NOT_FOUND);
        }

    }


    @PostMapping("/add-content")
    public void add(@RequestBody Content content){
        service.save(content);
    }

    @PutMapping("/update-content/{content_id}")
    public ResponseEntity<?> update(@RequestBody Content content, @PathVariable Integer content_id){
        try {
            Content existContent= service.get(content_id);
            existContent.setContentTitle(content.getContentTitle());
            existContent.setContentDescription(content.getContentDescription());
            existContent.setMedia(content.getMedia());
            service.save(existContent);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete-content/{id}")
    public void delete(@PathVariable Integer id){
        service.delete(id);
    }
}
