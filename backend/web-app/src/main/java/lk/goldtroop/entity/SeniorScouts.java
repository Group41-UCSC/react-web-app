package lk.goldtroop.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class SeniorScouts {
    private Integer scoutId;
    private String preferredName;
    private String fatherName;
    private String fatherOccupation;
    private Integer fatherContact;
    private String motherName;
    private Integer motherContact;
    private String specialRoles;

    public SeniorScouts() {
    }

    public SeniorScouts(Integer scoutId, String preferredName, String fatherName, String fatherOccupation,
                        Integer fatherContact, String motherName, Integer motherContact, String specialRoles) {
        this.scoutId = scoutId;
        this.preferredName = preferredName;
        this.fatherName = fatherName;
        this.fatherOccupation = fatherOccupation;
        this.fatherContact = fatherContact;
        this.motherName = motherName;
        this.motherContact = motherContact;
        this.specialRoles = specialRoles;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getScoutId() {
        return scoutId;
    }

    public void setScoutId(Integer scoutId) {
        this.scoutId = scoutId;
    }

    public String getPreferredName() {
        return preferredName;
    }

    public void setPreferredName(String preferredName) {
        this.preferredName = preferredName;
    }

    public String getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public String getFatherOccupation() {
        return fatherOccupation;
    }

    public void setFatherOccupation(String fatherOccupation) {
        this.fatherOccupation = fatherOccupation;
    }

    public Integer getFatherContact() {
        return fatherContact;
    }

    public void setFatherContact(Integer fatherContact) {
        this.fatherContact = fatherContact;
    }

    public String getMotherName() {
        return motherName;
    }

    public void setMotherName(String motherName) {
        this.motherName = motherName;
    }

    public Integer getMotherContact() {
        return motherContact;
    }

    public void setMotherContact(Integer motherContact) {
        this.motherContact = motherContact;
    }

    public String getSpecialRoles() {
        return specialRoles;
    }

    public void setSpecialRoles(String specialRoles) {
        this.specialRoles = specialRoles;
    }
}
