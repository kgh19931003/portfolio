package com.portfolio.kim

import com.portfolio.kim.config.JasyptConfig
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class KimApplication

fun main(args: Array<String>) {
    runApplication<KimApplication>(*args)

    println("***************"+JasyptConfig().jasyptStringEncryptor())
}
