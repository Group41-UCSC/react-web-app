package lk.goldtroop.repository;

import lk.goldtroop.entity.Announcement;
import lk.goldtroop.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnnouncementRepository extends JpaRepository<Announcement, Integer> {
}
