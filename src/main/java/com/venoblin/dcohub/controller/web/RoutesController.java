package com.venoblin.dcohub.controller.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RoutesController {

  @GetMapping("/")
  public String home(Model model) {
    return "home";
  }
}