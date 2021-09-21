package lk.goldtroop.controller;

import lk.goldtroop.entity.GetPendingItemLog;
import lk.goldtroop.entity.Item;
import lk.goldtroop.entity.ItemLog;
import lk.goldtroop.service.ItemLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin("*")
@RestController
public class ItemLogController {
    @Autowired
    private ItemLogService service;

    @GetMapping("/itemlogs")
    public List<ItemLog> list(){
        return service.listAll();
    }

    @GetMapping("/itemlg/pending")
    public List<GetPendingItemLog> findAllPendingItemlog(){
        return service.getAllPendingItemlog();
    }

    @GetMapping("/itemlogs/{itemlog_status}")
    public List<ItemLog> findItemStatus(@PathVariable (value="itemlog_status") String itemlog_status){
        return service.getItemlogStatus(itemlog_status);
    }

    @GetMapping("/itemlog/{itemlog_id}")
    public ResponseEntity<ItemLog> get(@PathVariable Integer itemlog_id){
        try{
            ItemLog itemlog=service.get(itemlog_id);
            return new ResponseEntity<ItemLog>(itemlog, HttpStatus.OK);
        } catch(NoSuchElementException e){
            return new ResponseEntity<ItemLog>(HttpStatus.NOT_FOUND);
        }

    }


    @PostMapping("/add-itemlog")
    public void add(@RequestBody ItemLog itemlog){
        service.save(itemlog);
    }

    @PutMapping("/update-itemlog/{itemlog_id}")
    public ResponseEntity<?> update(@RequestBody ItemLog itemlog, @PathVariable Integer itemlog_id){
        try {
            ItemLog existItemLog= service.get(itemlog_id);
            existItemLog.setItemlogIssuedto(itemlog.getItemlogIssuedto());
            existItemLog.setItemlogQuantity(itemlog.getItemlogQuantity());
            existItemLog.setItemlogStatus(itemlog.getItemlogStatus());
            existItemLog.setItemlogPurpose(itemlog.getItemlogPurpose());
            existItemLog.setItemlogRemarks(itemlog.getItemlogRemarks());
            existItemLog.setItemlogActualReceivedDate(itemlog.getItemlogActualReceivedDate());
            service.save(existItemLog);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete-itemlog/{id}")
    public void delete(@PathVariable Integer id){
        service.delete(id);
    }
}
