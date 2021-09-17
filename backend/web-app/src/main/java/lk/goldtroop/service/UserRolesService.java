package lk.goldtroop.service;

import lk.goldtroop.entity.UserRoles;
import lk.goldtroop.repository.UserRolesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserRolesService {
    @Autowired
    private UserRolesRepository role;

    public List<UserRoles> listAll(){
        return role.findAll();
    }

    public void save(UserRoles userroles){
        role.save(userroles);
    }

    public UserRoles get(Integer id){
        return role.findById(id).get();
    }

    public void delete(Integer id){
        role.deleteById(id);
    }
}
