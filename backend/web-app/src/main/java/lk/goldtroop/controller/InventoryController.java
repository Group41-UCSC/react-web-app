package lk.goldtroop.controller;

import lk.goldtroop.entity.Inventory;
import lk.goldtroop.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
public class InventoryController {
    @Autowired
    private InventoryService service;

    @GetMapping("/view-inventory")
    public List<Inventory> list(){
        return service.listAll();
    }

    @GetMapping("/view-inventory/{id}")
    public ResponseEntity<Inventory> get(@PathVariable Integer id){
        try {
            Inventory inventory = service.get(id);
            return new ResponseEntity<Inventory>(inventory, HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<Inventory>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add-inventory")
    public void add(@RequestBody Inventory inventory){
        service.save(inventory);
    }

   @PutMapping("/update-inventory/{id}")
   public ResponseEntity<?> update(@RequestBody Inventory inventory,
                      @PathVariable Integer id){
        try {
            Inventory existInventory = service.get(id);
            existInventory.setCategory(inventory.getCategory());
            existInventory.setDescription(inventory.getDescription());
            service.save(existInventory);
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
