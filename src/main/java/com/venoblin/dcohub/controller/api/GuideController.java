package com.venoblin.dcohub.controller.api;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.venoblin.dcohub.model.Guide;
import com.venoblin.dcohub.service.GuideService;


@RestController
@RequestMapping("/api/guides")
public class GuideController {
  private final GuideService guideService;

  public GuideController(GuideService guideService) {
    this.guideService = guideService;
  }

  @GetMapping
  public List<Guide> getAllGuides() {
    return guideService.getAllGuides();
  }

  @PostMapping
  public Guide postGuide(@RequestBody Guide guide) {
    return guideService.createGuide(guide);
  }
}