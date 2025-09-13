package com.venoblin.dcohub.controller.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RoutesController {

  // Handles the root URL
    @GetMapping(value = "/")
    public String forwardRoot() {
        return "forward:/index.html";
    }

    // This regex handles client-side routes but ignores static files
    // It matches any path that DOES NOT contain a period.
    @GetMapping(value = "/{path:^(?!.*\\.).*$}/**")
    public String forwardClientRoutes() {
        return "forward:/index.html";
    }
}