package lk.goldtroop.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Event {
    private Integer eventId;
    private String eventTitle;
    private String eventDescription;
    private Integer eventChildId;
    private String eventCategory;
    private String eventStatus;
    private String eventFeedback;

    public Event() {
    }

    public Event(Integer eventId, String eventTitle, String eventDescription, Integer eventChildId, String eventCategory, String eventStatus, String eventFeedback) {
        this.eventId = eventId;
        this.eventTitle = eventTitle;
        this.eventDescription = eventDescription;
        this.eventChildId = eventChildId;
        this.eventCategory = eventCategory;
        this.eventStatus = eventStatus;
        this.eventFeedback = eventFeedback;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getEventId() {
        return eventId;
    }

    public void setEventId(Integer eventId) {
        this.eventId = eventId;
    }

    public String getEventTitle() {
        return eventTitle;
    }

    public void setEventTitle(String eventTitle) {
        this.eventTitle = eventTitle;
    }

    public String getEventDescription() {
        return eventDescription;
    }

    public void setEventDescription(String eventDescription) {
        this.eventDescription = eventDescription;
    }

    public Integer getEventChildId() {
        return eventChildId;
    }

    public void setEventChildId(Integer eventChildId) {
        this.eventChildId = eventChildId;
    }

    public String getEventCategory() {
        return eventCategory;
    }

    public void setEventCategory(String eventCategory) {
        this.eventCategory = eventCategory;
    }

    public String getEventStatus() {
        return eventStatus;
    }

    public void setEventStatus(String eventStatus) {
        this.eventStatus = eventStatus;
    }

    public String getEventFeedback() {
        return eventFeedback;
    }

    public void setEventFeedback(String eventFeedback) {
        this.eventFeedback = eventFeedback;
    }
}
