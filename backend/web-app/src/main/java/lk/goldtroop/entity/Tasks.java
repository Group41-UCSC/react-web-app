package lk.goldtroop.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Tasks {
    private Integer taskId;
    private String taskName;
    private Integer childTaskId;
    private String taskType;
    private String taskDescription;
    private String taskCategory;
    private String thingsNeeded;
    private String status;
    private String experiencePoints;
    private String eventId;

    public Tasks() {
    }

    public Tasks(Integer taskId, String taskName, Integer childTaskId,
                 String taskType, String taskDescription,
                 String taskCategory, String thingsNeeded, String status,
                 String experiencePoints, String eventId) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.childTaskId = childTaskId;
        this.taskType = taskType;
        this.taskDescription = taskDescription;
        this.taskCategory = taskCategory;
        this.thingsNeeded = thingsNeeded;
        this.status = status;
        this.experiencePoints = experiencePoints;
        this.eventId = eventId;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getTaskId() {
        return taskId;
    }

    public void setTaskId(Integer taskId) {
        this.taskId = taskId;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public Integer getChildTaskId() {
        return childTaskId;
    }

    public void setChildTaskId(Integer childTaskId) {
        this.childTaskId = childTaskId;
    }

    public String getTaskType() {
        return taskType;
    }

    public void setTaskType(String taskType) {
        this.taskType = taskType;
    }

    public String getTaskDescription() {
        return taskDescription;
    }

    public void setTaskDescription(String taskDescription) {
        this.taskDescription = taskDescription;
    }

    public String getTaskCategory() {
        return taskCategory;
    }

    public void setTaskCategory(String taskCategory) {
        this.taskCategory = taskCategory;
    }

    public String getThingsNeeded() {
        return thingsNeeded;
    }

    public void setThingsNeeded(String thingsNeeded) {
        this.thingsNeeded = thingsNeeded;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getExperiencePoints() {
        return experiencePoints;
    }

    public void setExperiencePoints(String experiencePoints) {
        this.experiencePoints = experiencePoints;
    }

    public String getEventId() {
        return eventId;
    }

    public void setEventId(String eventId) {
        this.eventId = eventId;
    }
}
