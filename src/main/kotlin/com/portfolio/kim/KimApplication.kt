package com.portfolio.kim

import com.portfolio.kim.config.JasyptConfig
import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
@EnableEncryptableProperties
class KimApplication

fun main(args: Array<String>) {
    runApplication<KimApplication>(*args)
}
