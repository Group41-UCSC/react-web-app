package lk.goldtroop.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import java.sql.Blob;

@Entity
public class Content {
    private Integer contentId;
    private Integer scoutId;
    private String contentTitle;
    private String contentDescription;
    private String media;
    private String status;
    private String postedDate;

    public Content() {
    }

    public Content(Integer contentId, Integer scoutId, String contentTitle, String contentDescription, String media, String status, String postedDate) {
        this.contentId = contentId;
        this.scoutId = scoutId;
        this.contentTitle = contentTitle;
        this.contentDescription = contentDescription;
        this.media = media;
        this.status = status;
        this.postedDate = postedDate;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getContentId() {
        return contentId;
    }

    public void setContentId(Integer contentId) {
        this.contentId = contentId;
    }

    public Integer getScoutId() {
        return scoutId;
    }

    public void setScoutId(Integer scoutId) {
        this.scoutId = scoutId;
    }

    public String getContentTitle() {
        return contentTitle;
    }

    public void setContentTitle(String contentTitle) {
        this.contentTitle = contentTitle;
    }

    public String getContentDescription() {
        return contentDescription;
    }

    public void setContentDescription(String contentDescription) {
        this.contentDescription = contentDescription;
    }

    public String getMedia() {
        return media;
    }

    public void setMedia(String media) {
        this.media = media;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPostedDate() {
        return postedDate;
    }

    public void setPostedDate(String postedDate) {
        this.postedDate = postedDate;
    }
}