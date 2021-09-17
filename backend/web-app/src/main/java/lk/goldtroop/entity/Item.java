package lk.goldtroop.entity;

import org.springframework.data.jpa.repository.Query;

import javax.persistence.*;

@Entity
//@NamedQuery(name= "Item.findByItemSearch",
//        query= "SELECT * FROM Item  WHERE CONCAT(item.item_id, item.item_name, item.item_source, item.item_status, item.item_lifespan,item.item_build) LIKE '%ca%'")
public class Item {
    private Integer itemId;
    private String itemName;
    private String itemSource;
    private Integer inventoryId;
    private Integer itemQuantity;
    private Float itemLifespan;
    private Float itemPrice;
    private String itemBuild;
    private String itemStatus;
    private String itemDescription;

    public Item() {
    }

    public Item(Integer itemId, String itemName, String itemSource, Integer inventoryId, Integer itemQuantity, Float itemLifespan, Float itemPrice, String itemBuild, String itemStatus, String itemDescription) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.itemSource = itemSource;
        this.inventoryId = inventoryId;
        this.itemQuantity = itemQuantity;
        this.itemLifespan = itemLifespan;
        this.itemPrice = itemPrice;
        this.itemBuild = itemBuild;
        this.itemStatus = itemStatus;
        this.itemDescription = itemDescription;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getItemId() {
        return itemId;
    }

    public void setItemId(Integer itemId) {
        this.itemId = itemId;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getItemSource() {
        return itemSource;
    }

    public void setItemSource(String itemSource) {
        this.itemSource = itemSource;
    }

    public Integer getInventoryId() {
        return inventoryId;
    }

    public void setInventoryId(Integer inventoryId) {
        this.inventoryId = inventoryId;
    }

    public Integer getItemQuantity() {
        return itemQuantity;
    }

    public void setItemQuantity(Integer itemQuantity) {
        this.itemQuantity = itemQuantity;
    }

    public Float getItemLifespan() {
        return itemLifespan;
    }

    public void setItemLifespan(Float itemLifespan) {
        this.itemLifespan = itemLifespan;
    }

    public Float getItemPrice() {
        return itemPrice;
    }

    public void setItemPrice(Float itemPrice) {
        this.itemPrice = itemPrice;
    }

    public String getItemBuild() {
        return itemBuild;
    }

    public void setItemBuild(String itemBuild) {
        this.itemBuild = itemBuild;
    }

    public String getItemStatus() {
        return itemStatus;
    }

    public void setItemStatus(String itemStatus) {
        this.itemStatus = itemStatus;
    }

    public String getItemDescription() {
        return itemDescription;
    }

    public void setItemDescription(String itemDescription) {
        this.itemDescription = itemDescription;
    }
}
