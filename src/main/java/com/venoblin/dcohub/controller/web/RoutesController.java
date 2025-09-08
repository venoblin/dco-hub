package com.venoblin.dcohub.controller.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class RoutesController {

  @GetMapping("/")
  public String home(Model model) {
    return "home";
  }

  @GetMapping("/guides")
  public String guides(Model model) {
    return "guides";
  }

  @GetMapping("/guides/new")
  public String newGuide(Model model) {
    return "newGuide";
  }

  @GetMapping("/guides/{id}")
  public String singleGuide(@PathVariable("id") Long id, Model model) {
    model.addAttribute("guideId", id);
    
    return "singleGuide";
  }
}