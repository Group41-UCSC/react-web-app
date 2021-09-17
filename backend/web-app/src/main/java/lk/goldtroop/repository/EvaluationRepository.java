package lk.goldtroop.repository;

import lk.goldtroop.entity.Evaluation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EvaluationRepository extends JpaRepository<Evaluation, Integer> {
}
