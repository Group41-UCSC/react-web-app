package lk.goldtroop.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ScoutLeaders {
   private Integer scoutId;
   private String preferredName;
   private Integer warrantNum;
   private String leaderType;

    public ScoutLeaders() {
    }

    public ScoutLeaders(Integer scoutId, String preferredName, Integer warrantNum, String leaderType) {
        this.scoutId = scoutId;
        this.preferredName = preferredName;
        this.warrantNum = warrantNum;
        this.leaderType = leaderType;
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

    public Integer getWarrantNum() {
        return warrantNum;
    }

    public void setWarrantNum(Integer warrantNum) {
        this.warrantNum = warrantNum;
    }

    public String getLeaderType() {
        return leaderType;
    }

    public void setLeaderType(String leaderType) {
        this.leaderType = leaderType;
    }
}
