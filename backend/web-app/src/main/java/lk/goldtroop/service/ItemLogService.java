package lk.goldtroop.service;

import lk.goldtroop.entity.GetPendingItemLog;
import lk.goldtroop.entity.Item;
import lk.goldtroop.entity.ItemLog;
import lk.goldtroop.repository.ItemLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemLogService {
    @Autowired
    private ItemLogRepository repo;

    public List<ItemLog> listAll(){
        return repo.findAll();
    }

    public List<GetPendingItemLog> getAllPendingItemlog(){
        return repo.findAllPendingItemlog();
    }
    public void save(ItemLog itemlog){
        repo.save(itemlog);
    }

    public ItemLog get(Integer itemlog_id){
        return repo.findById(itemlog_id).get();
    }
    public List<ItemLog> getItemlogStatus(String itemlog_status){
        return repo.findByItemlogStatus(itemlog_status);
    }
    public void delete(Integer itemlog_id){
        repo.deleteById(itemlog_id);
    }
}

