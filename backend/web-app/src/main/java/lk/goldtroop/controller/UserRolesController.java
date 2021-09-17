package lk.goldtroop.controller;

import lk.goldtroop.entity.UserRoles;
import lk.goldtroop.service.UserRolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
public class UserRolesController {
    @Autowired
    private UserRolesService service;

    @GetMapping("/view-user-roles")
    public List<UserRoles> list(){
        return service.listAll();
    }

    @GetMapping("/view-user-roles/{id}")
    public ResponseEntity<UserRoles> get(@PathVariable Integer id){
        try {
            UserRoles userroles = service.get(id);
            return new ResponseEntity<UserRoles>(userroles, HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<UserRoles>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update-user-roles/{id}")
    public ResponseEntity<?> update(@RequestBody UserRoles userroles,
                                    @PathVariable Integer id){
        try {
            UserRoles existUserRole = service.get(id);
            existUserRole.setUserRoleTitle(userroles.getUserRoleTitle());
            existUserRole.setPersonStatus(userroles.getPersonStatus());
            service.save(existUserRole);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete-user-roles/{id}")
    public void delete(@PathVariable Integer id){
        service.delete(id);
    }
}
