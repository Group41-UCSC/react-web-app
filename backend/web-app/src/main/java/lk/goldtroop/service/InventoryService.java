package lk.goldtroop.service;

import lk.goldtroop.entity.Inventory;
import lk.goldtroop.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryService {
    @Autowired
    private InventoryRepository repo;



    public List<Inventory> listAll(){
        return repo.findAll();
    }

    public void save(Inventory inventory){
        repo.save(inventory);
    }

    public Inventory get(Integer id){
        return repo.findById(id).get();
    }

    public void delete(Integer id){
        repo.deleteById(id);
    }
}
