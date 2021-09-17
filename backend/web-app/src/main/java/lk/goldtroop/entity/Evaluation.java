package lk.goldtroop.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Evaluation {
    private Integer evaluvationId;
    private Integer evaluvationChildId;
    private String evaluvationTitle;
    private String evaluvationVersion;
    private String evaluvationStartdate;
    private String evaluvationEnddate;

    public Evaluation() {
    }

    public Evaluation(Integer evaluvationId, Integer evaluvationChildId, String evaluvationTitle, String evaluvationVersion, String evaluvationStartdate, String evaluvationEnddate) {
        this.evaluvationId = evaluvationId;
        this.evaluvationChildId = evaluvationChildId;
        this.evaluvationTitle = evaluvationTitle;
        this.evaluvationVersion = evaluvationVersion;
        this.evaluvationStartdate = evaluvationStartdate;
        this.evaluvationEnddate = evaluvationEnddate;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getEvaluvationId() {
        return evaluvationId;
    }

    public void setEvaluvationId(Integer evaluvationId) {
        this.evaluvationId = evaluvationId;
    }

    public Integer getEvaluvationChildId() {
        return evaluvationChildId;
    }

    public void setEvaluvationChildId(Integer evaluvationChildId) {
        this.evaluvationChildId = evaluvationChildId;
    }

    public String getEvaluvationTitle() {
        return evaluvationTitle;
    }

    public void setEvaluvationTitle(String evaluvationTitle) {
        this.evaluvationTitle = evaluvationTitle;
    }

    public String getEvaluvationVersion() {
        return evaluvationVersion;
    }

    public void setEvaluvationVersion(String evaluvationVersion) {
        this.evaluvationVersion = evaluvationVersion;
    }

    public String getEvaluvationStartdate() {
        return evaluvationStartdate;
    }

    public void setEvaluvationStartdate(String evaluvationStartdate) {
        this.evaluvationStartdate = evaluvationStartdate;
    }

    public String getEvaluvationEnddate() {
        return evaluvationEnddate;
    }

    public void setEvaluvationEnddate(String evaluvationEnddate) {
        this.evaluvationEnddate = evaluvationEnddate;
    }
}
