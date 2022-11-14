package com.codefarm.farmer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminPolicy/*")
public class AdminPolicyController {

    @GetMapping("/policy")
    public void adminPolicy() {
    }

    @GetMapping("/policy_write")
    public void adminPolicyWrite() {
    }
}
