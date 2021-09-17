package lk.goldtroop.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Permission {
    private Integer permissionId;
    private String permissionTitle;
    private String permissionDescription;
    private String permissionScript;

    public Permission() {
    }

    public Permission(Integer permissionId, String permissionTitle, String permissionDescription, String permissionScript) {
        this.permissionId = permissionId;
        this.permissionTitle = permissionTitle;
        this.permissionDescription = permissionDescription;
        this.permissionScript = permissionScript;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getPermissionId() {
        return permissionId;
    }

    public void setPermissionId(Integer permissionId) {
        this.permissionId = permissionId;
    }

    public String getPermissionTitle() {
        return permissionTitle;
    }

    public void setPermissionTitle(String permissionTitle) {
        this.permissionTitle = permissionTitle;
    }

    public String getPermissionDescription() {
        return permissionDescription;
    }

    public void setPermissionDescription(String permissionDescription) {
        this.permissionDescription = permissionDescription;
    }

    public String getPermissionScript() {
        return permissionScript;
    }

    public void setPermissionScript(String permissionScript) {
        this.permissionScript = permissionScript;
    }
}
