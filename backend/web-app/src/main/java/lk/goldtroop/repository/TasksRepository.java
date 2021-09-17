package lk.goldtroop.repository;

import lk.goldtroop.entity.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TasksRepository extends JpaRepository<Tasks, Integer> {
}
