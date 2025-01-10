package com.portfolio.kim.service

import com.portfolio.kim.orm.jpa.MemberRepository
import org.springframework.stereotype.Service

// 새로운 Service 클래스 생성
@Service
class TokenValidationService(
    private val memberRepository: MemberRepository
) {
    fun validateRefreshTokenInDb(refreshToken: String, memId: String): Boolean {
        val member = memberRepository.findByMemIdAndMemRefreshToken(memId, refreshToken)
        return member.memRefreshToken == refreshToken
    }
}