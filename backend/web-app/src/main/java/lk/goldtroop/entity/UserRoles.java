package lk.goldtroop.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserRoles {
    private Integer userRoleId;
    private String userRoleTitle;
    private String personStatus;

    public UserRoles() {
    }

    public UserRoles(Integer userRoleId, String userRoleTitle, String personStatus) {
        this.userRoleId = userRoleId;
        this.userRoleTitle = userRoleTitle;
        this.personStatus = personStatus;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getUserRoleId() {
        return userRoleId;
    }

    public void setUserRoleId(Integer userRoleId) {
        this.userRoleId = userRoleId;
    }

    public String getUserRoleTitle() {
        return userRoleTitle;
    }

    public void setUserRoleTitle(String userRoleTitle) {
        this.userRoleTitle = userRoleTitle;
    }

    public String getPersonStatus() {
        return personStatus;
    }

    public void setPersonStatus(String personStatus) {
        this.personStatus = personStatus;
    }
}
