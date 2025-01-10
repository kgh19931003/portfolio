package com.portfolio.kim.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping


@Controller
class MainController {
    @GetMapping("/")
    fun home(): String {
        return "index" // Thymeleaf 템플릿을 찾지 못해서 발생할 수 있음
    }
}