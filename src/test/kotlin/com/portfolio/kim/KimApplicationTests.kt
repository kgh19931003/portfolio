package com.portfolio.kim

import com.portfolio.kim.util.JasyptUtils
import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties
import org.jasypt.encryption.StringEncryptor
import org.jasypt.encryption.pbe.PooledPBEStringEncryptor
import org.jasypt.encryption.pbe.StandardPBEStringEncryptor
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.core.env.Environment
import org.springframework.test.context.ActiveProfiles

@SpringBootTest
@ActiveProfiles("test")
internal class JasyptTest {


    @Value("\${jasypt.encryptor.password}")
    private val password: String? = null

    @Autowired
    private lateinit var jasyptUtils : JasyptUtils

    @Autowired
    private lateinit var environment : Environment

    @Test
    fun encryptTest() {

        val plainText = "root"  // 암호화할 텍스트

        val jasypt = StandardPBEStringEncryptor()
        jasypt.setPassword(password)
        jasypt.setAlgorithm("PBEWITHMD5ANDDES")

        val encryptedText = jasypt.encrypt(plainText)
        println("Encrypted: $encryptedText")  // 암호화된 문자열 출력

        val decryptedText = jasypt.decrypt(encryptedText)
        println("Decrypted: $decryptedText")  // 복호화된 문자열 출력

        assertEquals(plainText, decryptedText)  // 원본과 복호화된 텍스트 비교
    }


}
