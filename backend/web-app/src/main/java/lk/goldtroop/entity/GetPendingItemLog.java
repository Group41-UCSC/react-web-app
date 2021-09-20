package lk.goldtroop.entity;

public interface GetPendingItemLog {
    int getItemlogId();
    String getItemName();
    int getRequestedQuantity();
    String getRequesterName();
    String getRequestingDate();
    int getAvailableQuantity();
}
