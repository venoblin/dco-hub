package com.venoblin.dcohub.service;

import com.venoblin.dcohub.model.Guide;
import com.venoblin.dcohub.repository.GuideRepository;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class GuideService {
  private final GuideRepository guideRepository;

  public GuideService(GuideRepository guideRepository) {
    this.guideRepository = guideRepository;
  }

  public List<Guide> findAllGuides() {
    return guideRepository.findAll();
  }

  public Guide createGuide(Guide newGuide) {
    return guideRepository.save(newGuide);
  }
}