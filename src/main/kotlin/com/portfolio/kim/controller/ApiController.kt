package com.portfolio.kim.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api") // API 요청을 위한 기본 경로
class ApiController {
    @GetMapping("/hello")
    fun hello(): Map<String, String> {
        return mapOf("message" to "Hello from Spring Boot!")
    }
}
