package lk.goldtroop.service;
import lk.goldtroop.entity.Announcement;
import lk.goldtroop.repository.AnnouncementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnnouncementService {
    @Autowired
    private AnnouncementRepository repo;
    public List<Announcement> listAll(){
        return repo.findAll();
    }

    public void save(Announcement announcement){
        repo.save(announcement);
    }

    public Announcement get(Integer announcement_id){
        return repo.findById(announcement_id).get();
    }

    public void delete(Integer id){
        repo.deleteById(id);
    }
}
