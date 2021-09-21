package lk.goldtroop.repository;

import lk.goldtroop.entity.GetPendingItemLog;
import lk.goldtroop.entity.Item;
import lk.goldtroop.entity.ItemLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface ItemLogRepository extends JpaRepository<ItemLog, Integer> {
    List<ItemLog> findByItemlogStatus(String itemlog_status);

    @Transactional
    @Modifying
    @Query(value= "SELECT l.itemlog_id AS itemlogId i.item_name AS itemName l.itemlog_quantity AS requestedQuantity l.itemlog_issuedto AS requesterName l.itemlogIssueDate AS requesting_date i.itemAvailableQuantity AS availableQuantity" +
            " FROM 'item_log' AS l " +
            " JOIN 'item' AS i" +
            " ON l.item_id = i.item_id"+
            " WHERE l.itemlog_status='pending';",nativeQuery = true)
    List<GetPendingItemLog> findAllPendingItemlog();
}
