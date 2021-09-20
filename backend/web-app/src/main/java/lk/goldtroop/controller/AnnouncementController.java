package lk.goldtroop.controller;
import lk.goldtroop.entity.Announcement;

import lk.goldtroop.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
public class AnnouncementController {
    @Autowired
    private AnnouncementService service;

    @GetMapping("/view-announcement")
    public List<Announcement> list(){
        return service.listAll();
    }

    @GetMapping("/view-announcement/{id}")
    public ResponseEntity<Announcement> get(@PathVariable Integer id){
        try {
            Announcement announcement = service.get(id);
            return new ResponseEntity<Announcement>(announcement, HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<Announcement>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add-announcement")
    public void add(@RequestBody Announcement announcement){
        service.save(announcement);
    }

    @PutMapping("/update-announcement/{id}")
    public ResponseEntity<?> update(@RequestBody Announcement announcement,
                                    @PathVariable Integer announcement_id){
        try {
            Announcement existAnnouncement= service.get(announcement_id);
            existAnnouncement.setAnnouncementTitle(announcement.getAnnouncementTitle());
            existAnnouncement.setAnnouncementDate(announcement.getAnnouncementDate());
            existAnnouncement.setAnnouncementAuthor(announcement.getAnnouncementAuthor());
            existAnnouncement.setAnnouncementBody(announcement.getAnnouncementBody());
            service.save(existAnnouncement);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete-inventory/{id}")
    public void delete(@PathVariable Integer id){
        service.delete(id);
    }
}

