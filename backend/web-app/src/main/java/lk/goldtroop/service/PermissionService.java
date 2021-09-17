package lk.goldtroop.service;

import lk.goldtroop.entity.Permission;
import lk.goldtroop.repository.PermissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PermissionService {
    @Autowired
    private PermissionRepository repo;

    public List<Permission> listAll(){
        return repo.findAll();
    }
    public void save(Permission permission){
        repo.save(permission);
    }

    public Permission get(Integer permission_id){
        return repo.findById(permission_id).get();
    }
    public void delete(Integer permission_id){
        repo.deleteById(permission_id);
    }
}

