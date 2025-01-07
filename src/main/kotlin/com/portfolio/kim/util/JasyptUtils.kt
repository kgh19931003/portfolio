package com.portfolio.kim.util


import org.jasypt.encryption.StringEncryptor
import org.springframework.stereotype.Component

@Component
class JasyptUtils(private val encryptor: StringEncryptor) {

    fun encrypt(value: String): String = encryptor.encrypt(value)

    fun decrypt(encryptedValue: String): String = encryptor.decrypt(encryptedValue)
}