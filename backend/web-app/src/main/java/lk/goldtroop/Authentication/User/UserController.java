package lk.goldtroop.Authentication.User;


//import com.example.buildermatebackend.Entity.OutputUser;
//import com.example.buildermatebackend.Entity.Reminders;
//import com.example.buildermatebackend.Service.RelatedProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = {"http://localhost:3000", "https://buildermatefend.azurewebsites.net"})
public class UserController {

    @Autowired
    private UserRepository repository;
    @Autowired
    private UserService userService;

//    @Autowired
//    private RelatedProjectService relatedProjectService;

    @GetMapping("/currentUser")
    public Map<String, String> testController(Authentication authentication){
        User user=(User)authentication.getPrincipal();
        HashMap<String, String> map = new HashMap<>();
        map.put("Role",user.getUserRole().toString());
        map.put("Lname",user.getLastName());
        map.put("Fname", user.getFirstName());
        map.put("userID",user.getUserID().toString());
        map.put("activated",String.valueOf(user.getActivated()));
        return map;
    }

    @GetMapping("/getProfile")
    public Map<String, String> getProfile(Authentication authentication){
        User user=(User)authentication.getPrincipal();
        HashMap<String, String> map = new HashMap<>();
        map.put("Role",user.getUserRole().toString());
        map.put("Lname",user.getLastName());
        map.put("Fname", user.getFirstName());
        map.put("email",user.getEmail());
        map.put("contact",user.getContact());
        map.put("address",user.getAddress());
        map.put("nic",user.getNic());
        return map;
    }

    @PutMapping("/updateProfile")
    public ResponseEntity<User> updateReminders(@RequestBody User userUpdate){
        User user = repository.findById(userUpdate.getUserID()).orElse(null);
        user.setContact(userUpdate.getContact());
        user.setAddress(userUpdate.getAddress());
        User updatedUser = repository.save(user);
        return ResponseEntity.ok(updatedUser);
    }



    @GetMapping("/setRole/{userId}/{userRole}")
    //@Secured("ROLE_ADMIN")
    @PreAuthorize("hasAuthority('DIRECTOR') or hasAuthority('PROJECT_MANAGER')")
    public String giveAccessToUser(@PathVariable Long userId, @PathVariable String userRole) {
        User user = repository.findById(userId).get();

        if(userRole.equals("PROJECT_ENGINEER")){
            user.setUserRole(UserRole.PROJECT_ENGINEER);
        }
        if(userRole.equals("PROJECT_MANAGER")){
            user.setUserRole(UserRole.PROJECT_MANAGER);
        }
        if(userRole.equals("SITE_ENGINEER")){
            user.setUserRole(UserRole.SITE_ENGINEER);
        }
        if(userRole.equals("SITE_MANAGER")){
            user.setUserRole(UserRole.SITE_MANAGER);
        }
        if(userRole.equals("CLIENT")){
            user.setUserRole(UserRole.CLIENT);
        }
        user.setActivated(1);
        repository.save(user);

        return "Success";
    }


//    @GetMapping("getByRole/{stringuserRole}")
//    @PreAuthorize("hasAuthority('DIRECTOR') or hasAuthority('PROJECT_MANAGER')")
//    public List<OutputUser> getByRole(@PathVariable String stringuserRole)  {
//        UserRole role = UserRole.USER;
//        if (stringuserRole.equals("PROJECT_ENGINEER")) {
//            role = UserRole.PROJECT_ENGINEER;
//        }
//        if (stringuserRole.equals("PROJECT_MANAGER")) {
//            role = UserRole.PROJECT_MANAGER;
//        }
//        if (stringuserRole.equals("SITE_ENGINEER")) {
//            role = UserRole.SITE_ENGINEER;
//        }
//        if (stringuserRole.equals("SITE_MANAGER")) {
//            role = UserRole.SITE_MANAGER;
//        }
//        if (stringuserRole.equals("CLIENT")) {
//            role = UserRole.CLIENT;
//        }

//        List<User> allUsers = userService.findUserbyRole(role);
//
//
//        List<OutputUser> usersInProject = new ArrayList<OutputUser>();
//        for (User user:allUsers) {
//            OutputUser outputUser = new OutputUser(user.getFirstName(),user.getLastName(),user.getNic(),user.getAddress(),user.getUserID(),user.getContact());
//            usersInProject.add(outputUser); }
//        return usersInProject;
//    }

//    @Transactional
//    @GetMapping("deactivateUser/{userID}")
//    @PreAuthorize("hasAuthority('DIRECTOR') or hasAuthority('PROJECT_MANAGER')")
//    public String removeUser(@PathVariable Long userID){
//        User user =userService.findUserbyID(String.valueOf(userID));
//        relatedProjectService.deleteAllRelatedProjects(userID);
//        user.setActivated(0);
//        user.setUserRole(UserRole.USER);
//        return "Success";
//    }


    }
