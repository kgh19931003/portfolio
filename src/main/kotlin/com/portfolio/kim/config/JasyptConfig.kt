package com.portfolio.kim.config

import org.jasypt.encryption.StringEncryptor
import org.jasypt.encryption.pbe.PooledPBEStringEncryptor
import org.jasypt.encryption.pbe.config.SimpleStringPBEConfig
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class JasyptConfig {

    @Bean("jasyptStringEncryptor")
    fun jasyptStringEncryptor(): StringEncryptor {
        val encryptor = PooledPBEStringEncryptor()

        encryptor.apply {
            setPoolSize(4) // Pool size 설정 추가
            setPassword("test") // 암호화 키
            setAlgorithm("PBEWithMD5AndDES") // 암호화 알고리즘
        }

        return encryptor
    }
}