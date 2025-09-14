package com.venoblin.dcohub.controller.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RoutesController {

    @GetMapping(value = "/")
    public String forwardRoot() {
        return "forward:/index.html";
    }

    @GetMapping(value = "/{path:[^\\.]*}")
    public String forwardClientRoutes() {
        return "forward:/index.html";
    }
}