package lk.goldtroop.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class Announcement {
    private Integer announcementId;
    private String announcementTitle;
    private LocalDateTime announcementDate;
    private String announcementAuthor;
    private String announcementBody;

    public Announcement() {
    }

    public Announcement(Integer announcementId, String announcementTitle, LocalDateTime announcementDate, String announcementAuthor, String announcementBody) {
        this.announcementId = announcementId;
        this.announcementTitle = announcementTitle;
        this.announcementDate = announcementDate;
        this.announcementAuthor = announcementAuthor;
        this.announcementBody = announcementBody;

    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getAnnouncementId() {
        return announcementId;
    }

    public void setAnnouncementId(Integer announcementId) {
        this.announcementId = announcementId;
    }

    public String getAnnouncementTitle() {
        return announcementTitle;
    }

    public void setAnnouncementTitle(String announcementTitle) {
        this.announcementTitle = announcementTitle;
    }

    public LocalDateTime getAnnouncementDate() {
        return announcementDate;
    }

    public void setAnnouncementDate(LocalDateTime announcementDate) {
        this.announcementDate = announcementDate;
    }

    public String getAnnouncementAuthor() {
        return announcementAuthor;
    }

    public void setAnnouncementAuthor(String announcementAuthor) {
        this.announcementAuthor = announcementAuthor;
    }

    public String getAnnouncementBody() {
        return announcementBody;
    }

    public void setAnnouncementBody(String announcementBody) {
        this.announcementBody = announcementBody;
    }


}

