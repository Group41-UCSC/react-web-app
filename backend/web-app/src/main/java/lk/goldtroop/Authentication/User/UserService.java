package lk.goldtroop.Authentication.User;

import lk.goldtroop.Authentication.Register.token.ConfirmationToken;
import lk.goldtroop.Authentication.Register.token.ConfirmationTokenService;
//import com.example.buildermatebackend.Entity.OutputUser;
//import com.example.buildermatebackend.Entity.Reminders;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {

    public User saveUser(User user){
        return repository.save(user);
    }

    private final static String USER_NOT_FOUND="User with email %s not found";

    private final UserRepository repository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ConfirmationTokenService confirmationTokenService;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return repository.findByEmail(email);
    }

    public String signUpUser(User user) {
        boolean userExists = repository.findByEmail(user.getEmail()) != null;


        if (userExists) {
            // TODO check of attributes are the same and
            // TODO if email not confirmed send confirmation email.

            throw new IllegalStateException("email already taken");
        }

        String encodedPassword = bCryptPasswordEncoder
                .encode(user.getPassword());

        user.setPassword(encodedPassword);

        repository.save(user);

        String token = UUID.randomUUID().toString();

        ConfirmationToken confirmationToken = new ConfirmationToken(
                token,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),
                user
        );


        confirmationTokenService.saveConfirmationToken(
                confirmationToken);

//        TODO: SEND EMAIL

        return token;
    }


    public void enableUser(String email) {
        repository.enableUser(email);
    }

    public User getUser(Long userID){
        return repository.getById(userID);
    }
    public void updateResetPasswordToken(String token, String email) throws UsernameNotFoundException{
        User user = repository.findByEmail(email);
        if(user!=null){
            user.setResetPasswordToken(token);
            repository.save(user);
        }else{
            throw new UsernameNotFoundException("Could not find user with email "+ email);
        }
    }





    public User getByResetPasswordToken(String token){
        return repository.findByResetPasswordToken(token);
    }




    public void updatePassword(User user, String newPassword){
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(newPassword);
        user.setPassword(encodedPassword);
        user.setResetPasswordToken(null);
        repository.save(user);
    }

    public List<User> findUnactiveUsers(){
        return repository.findUsersByActivatedEquals(0);
    }

    public User findUserbyID(String stringid){
        Long id=Long.parseLong(stringid);
        return repository.findByUserID(id);
    }

    public List<User> findUserbyRole(UserRole userRole){
        String role = userRole.toString();
        List<User>  users= repository.findUsersByUserRole(userRole);
        return users;

    }

}
