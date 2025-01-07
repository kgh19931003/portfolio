package com.portfolio.kim

import com.portfolio.kim.util.JasyptUtils
import org.jasypt.encryption.StringEncryptor
import org.jasypt.encryption.pbe.StandardPBEStringEncryptor
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.core.env.Environment
import org.springframework.test.context.ActiveProfiles

@SpringBootTest
@ActiveProfiles("test")
internal class JasyptTest {


    @Autowired
    private lateinit var jasyptUtils : JasyptUtils

    @Autowired
    private lateinit var environment : Environment

    @Test
    fun encryptTest() {
        val plainText = "123123"  // 암호화할 텍스트

        val encryptedText = jasyptUtils.encrypt(plainText)
        println("Encrypted: $encryptedText")  // 암호화된 문자열 출력

        val decryptedText = jasyptUtils.decrypt(encryptedText)
        println("Decrypted: $decryptedText")  // 복호화된 문자열 출력

        assertEquals(plainText, decryptedText)  // 원본과 복호화된 텍스트 비교
    }


}
