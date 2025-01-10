package com.portfolio.kim.service

import com.portfolio.kim.orm.jpa.MemberRepository
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.stereotype.Service

@Service
class UserDetailService(private val memberRepository: MemberRepository): UserDetailsService {
    override fun loadUserByUsername(username: String?): UserDetails {
        TODO("Not yet implemented")
    }
}