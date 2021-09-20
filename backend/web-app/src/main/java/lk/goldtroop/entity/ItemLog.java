package lk.goldtroop.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ItemLog {
    private Integer itemlogId;
    private Integer itemId;
    private String itemlogIssuedto;
    private Integer itemlogQuantity;
    private String itemlogStatus;
    private String itemlogPurpose;
    private String itemlogRemarks;
    private String itemlogIssueDate;
    private String itemlogReceiveDate;
    private String itemlogActualReceivedDate;

    public ItemLog() {
    }

    public ItemLog(Integer itemlogId, Integer itemId, String itemlogIssuedto, Integer itemlogQuantity, String itemlogStatus, String itemlogPurpose, String itemlogRemarks, String itemlogIssueDate, String itemlogReceiveDate, String itemlogActualReceivedDate) {
        this.itemlogId = itemlogId;
        this.itemId = itemId;
        this.itemlogIssuedto = itemlogIssuedto;
        this.itemlogQuantity = itemlogQuantity;
        this.itemlogStatus = itemlogStatus;
        this.itemlogPurpose = itemlogPurpose;
        this.itemlogRemarks = itemlogRemarks;
        this.itemlogIssueDate = itemlogIssueDate;
        this.itemlogReceiveDate = itemlogReceiveDate;
        this.itemlogActualReceivedDate = itemlogActualReceivedDate;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getItemlogId() {
        return itemlogId;
    }

    public void setItemlogId(Integer itemlogId) {
        this.itemlogId = itemlogId;
    }

    public Integer getItemId() {
        return itemId;
    }

    public void setItemId(Integer itemId) {
        this.itemId = itemId;
    }

    public String getItemlogIssuedto() {
        return itemlogIssuedto;
    }

    public void setItemlogIssuedto(String itemlogIssuedto) {
        this.itemlogIssuedto = itemlogIssuedto;
    }

    public Integer getItemlogQuantity() {
        return itemlogQuantity;
    }

    public void setItemlogQuantity(Integer itemlogQuantity) {
        this.itemlogQuantity = itemlogQuantity;
    }

    public String getItemlogStatus() {
        return itemlogStatus;
    }

    public void setItemlogStatus(String itemlogStatus) {
        this.itemlogStatus = itemlogStatus;
    }

    public String getItemlogPurpose() {
        return itemlogPurpose;
    }

    public void setItemlogPurpose(String itemlogPurpose) {
        this.itemlogPurpose = itemlogPurpose;
    }

    public String getItemlogRemarks() {
        return itemlogRemarks;
    }

    public void setItemlogRemarks(String itemlogRemarks) {
        this.itemlogRemarks = itemlogRemarks;
    }

    public String getItemlogIssueDate() {
        return itemlogIssueDate;
    }

    public void setItemlogIssueDate(String itemlogIssueDate) {
        this.itemlogIssueDate = itemlogIssueDate;
    }

    public String getItemlogReceiveDate() {
        return itemlogReceiveDate;
    }

    public void setItemlogReceiveDate(String itemlogReceiveDate) {
        this.itemlogReceiveDate = itemlogReceiveDate;
    }

    public String getItemlogActualReceivedDate() {
        return itemlogActualReceivedDate;
    }

    public void setItemlogActualReceivedDate(String itemlogActualReceiveDate) {
        this.itemlogActualReceivedDate = itemlogActualReceivedDate;
    }
}
