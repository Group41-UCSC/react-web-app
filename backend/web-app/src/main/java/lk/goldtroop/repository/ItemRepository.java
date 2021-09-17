package lk.goldtroop.repository;

import lk.goldtroop.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Integer> {
    List<Item> findByItemStatus(String item_status);

    @Query("SELECT i FROM Item i  WHERE i.itemName LIKE %:keyword% OR i.itemBuild LIKE %:keyword% OR i.itemStatus LIKE %:keyword% OR i.itemLifespan LIKE %:keyword% OR i.itemSource LIKE %:keyword%")
    public List<Item> findByKeyword(@Param("keyword") String keyword);
}
