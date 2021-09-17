package lk.goldtroop.authentication.appuser;

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
import java.util.Date;

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@Entity
public class AppUser implements UserDetails {

    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;
    private String fullName;
    private String initialName;
    private String preferredName;
    private String membershipNumber;
    private String email;
    private String password;
    private String scoutRole;
    private Date dob;
    private String address;
    private String sectionHistory;
    private Date joinDate;
    private String bloodGroup;
    private String emgContact;
    private String whatsappContact;
    private String medicalHistory;
    @Enumerated(EnumType.STRING)
    private AppUserRole appUserRole;
    private Boolean locked = false;
    private Boolean enabled = false;

    public AppUser(String fullName,
                   String initialName,
                   String membershipNumber,
                   String scoutRole,
                   String email,
                   String password,
                   AppUserRole appUserRole) {
        this.fullName = fullName;
        this.initialName = initialName;
        this.membershipNumber = membershipNumber;
        this.scoutRole = scoutRole;
        this.email = email;
        this.password = password;
        this.appUserRole = appUserRole;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority authority =
                new SimpleGrantedAuthority(appUserRole.name());
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

    public String getFullName() {
        return fullName;
    }

    public String getInitialName() {
        return initialName;
    }

    public String getMembershipNumber() {
        return membershipNumber;
    }

    public String getScoutRole() {
        return scoutRole;
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
