package com.venoblin.dcohub.controller.api;

import com.venoblin.dcohub.model.Guide;
import com.venoblin.dcohub.service.GuideService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/guides")
public class GuideController {
  private final GuideService guideService;

  public GuideController(GuideService guideService) {
    this.guideService = guideService;
  }

  @GetMapping
  public ResponseEntity<List<Guide>> getAllGuides() {
    List<Guide> allGuides = guideService.getAllGuides();
    
    return ResponseEntity.status(HttpStatus.OK).body(allGuides);
  }

  @PostMapping
  public ResponseEntity<Guide> postGuide(@RequestBody Guide guide) {
    Guide createdGuide = guideService.createGuide(guide);

    return ResponseEntity.status(HttpStatus.CREATED).body(createdGuide);
  }
}