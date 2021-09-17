package lk.goldtroop.controller;

import lk.goldtroop.entity.Item;
import lk.goldtroop.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
public class ItemController {
    @Autowired
    private ItemService service;

    @GetMapping("/items")
    public List<Item> list(){
        return service.listAll();
    }

    @GetMapping("/items/category/{item_status}")
    public List<Item> findItemStatus(@PathVariable (value="item_status") String item_status){
        return service.getItemStatus(item_status);
    }
    @GetMapping("items/search/{keyword}")
    public List<Item> findByKeyword(@PathVariable String keyword){
        return service.getByKeyword(keyword);
    }

    @GetMapping("/items/{item_id}")
    public ResponseEntity<Item> get(@PathVariable Integer item_id){
        try{
            Item item=service.get(item_id);
            return new ResponseEntity<Item>(item, HttpStatus.OK);
        } catch(NoSuchElementException e){
            return new ResponseEntity<Item>(HttpStatus.NOT_FOUND);
        }

    }


    @PostMapping("/add-item")
    public void add(@RequestBody Item item){
        service.save(item);
    }

    @PutMapping("/update-item/{item_id}")
    public ResponseEntity<?> update(@RequestBody Item item, @PathVariable Integer item_id){
        try {
            Item existItem= service.get(item_id);
            existItem.setItemName(item.getItemName());
            existItem.setItemSource(item.getItemSource());
            existItem.setInventoryId(item.getInventoryId());
            existItem.setItemQuantity(item.getItemQuantity());
            existItem.setItemLifespan(item.getItemLifespan());
            existItem.setItemPrice(item.getItemPrice());
            existItem.setItemBuild(item.getItemBuild());
            existItem.setItemStatus(item.getItemStatus());
            existItem.setItemDescription(item.getItemDescription());
            service.save(existItem);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete-item/{id}")
    public void delete(@PathVariable Integer id){
        service.delete(id);
    }
}
