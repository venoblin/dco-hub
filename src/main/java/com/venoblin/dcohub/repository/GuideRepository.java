package com.venoblin.dcohub.repository;

import com.venoblin.dcohub.model.Guide;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GuideRepository extends JpaRepository<Guide, Long> {}