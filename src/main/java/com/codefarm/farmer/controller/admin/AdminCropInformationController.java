package com.codefarm.farmer.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminCropInformation/*")
public class AdminCropInformationController {

    @GetMapping("/cropInformation")
    public void adminCropInformation() {
    }

    @GetMapping("/cropInformation-write")
    public void adminCropInformationWrite() {
    }

    @GetMapping("/cropInformation-update")
    public void adminCropInformationUpdate() {
    }
}
