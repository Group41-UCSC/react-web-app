package lk.goldtroop.Authentication.User;

//import com.example.buildermatebackend.Entity.Notification;
//import com.example.buildermatebackend.Entity.ProjectNotification;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.Collections;
import java.util.Set;


@Getter
@Setter
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@EqualsAndHashCode
@NoArgsConstructor
@Entity
@Table(name="usertable")
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
//    @GeneratedValue
    private Long userID;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String contact;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String nic;

    @Column(nullable = false)
    private String password;

    @Column(name = "reset_password_token")
    private String resetPasswordToken;

    @Column
    private int activated;

    @Enumerated(EnumType.STRING)
    private UserRole userRole;
    private Boolean locked=false;
    private Boolean enabled=false;

//    @OneToMany(cascade = CascadeType.REMOVE)
//    @JoinColumn(name="userID")
//    private Set<Notification> notifications;
//    @OneToMany(cascade = CascadeType.REMOVE)
//    @JoinColumn(name="userID")
//    private Set<ProjectNotification> projectNotifications;

    public User(String firstName, String lastName, String email, String contact, String address, String nic, String password, UserRole userRole , String resetPasswordToken, int activated) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contact = contact;
        this.address = address;
        this.nic = nic;
        this.password = password;
        this.userRole = userRole;
        this.resetPasswordToken=resetPasswordToken;
        this.activated=activated;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority authority= new SimpleGrantedAuthority(userRole.name());
        return Collections.singletonList(authority);
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return !locked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }


}
