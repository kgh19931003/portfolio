package com.portfolio.kim.controller

import jakarta.servlet.http.HttpServletRequest
import org.springframework.boot.web.servlet.error.ErrorController
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping


@Controller
class ErrorController : ErrorController {
    val errorPath: String
        get() = "/error"

    @RequestMapping("/error")
    fun handleError(request: HttpServletRequest?): String {
        // You can add any custom logic or a custom error page here
        return "error" // points to error.html or other error page
    }
}
