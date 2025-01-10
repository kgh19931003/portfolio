package com.portfolio.kim.service


import com.bs.wfund_search.form.MemberList
import com.bs.wfund_search.form.SearchForm
import com.portfolio.kim.orm.jooq.MemberDslRepository
import com.portfolio.kim.orm.jpa.MemberEntity
import com.portfolio.kim.orm.jpa.MemberRepository
import org.springframework.security.core.userdetails.User
import org.springframework.stereotype.Service

@Service
class MemberService(
    private val memberDslRepository: MemberDslRepository,
    private val memberRepository: MemberRepository
) {

    /**
     * 회원정보 조회
     */
    fun getMemberOne(form: SearchForm): List<MemberList> {
        return try {
            memberDslRepository.getMemberOne(form).map{
                MemberList(
                    memberId = it.memberId,
                    memberName = it.memberName,
                    memberMySeller = it.memberMySeller
                )
            }
        } catch (e: Exception) {
            throw Exception(e)
        }
    }

    fun findByMemId(id: String): MemberEntity {
        val member = memberRepository.findByMemId(id)
        return member
    }


    fun loadUserByMemberId(username: String): User {
        val member = memberRepository.findByMemId(username)
        return User(member.memId, member.memPassword, emptyList())
    }

    fun existsMember(id: String): Boolean {
        return memberRepository.existsByMemId(id)
    }

    fun findMember(id: String): User {
        val member = memberRepository.findByMemId(id)
        return User(member.memId, member.memPassword, emptyList())
    }

    fun getStoredRefreshToken(loginId: String): String? {
        // DB에서 저장된 리프레시 토큰을 조회하는 로직 구현
        // 리프레시 토큰이 없으면 null 반환
        return memberRepository.findByMemId(loginId).memRefreshToken
    }

    fun deleteAccessToken(loginId: String): String? {
        // DB에서 저장된 리프레시 토큰을 조회하는 로직 구현
        // 리프레시 토큰이 없으면 null 반환
        return memberRepository.deleteMemAccessTokenByMemId(loginId).memAccessToken
    }


    fun deleteRefreshToken(loginId: String): String? {
        // DB에서 저장된 리프레시 토큰을 조회하는 로직 구현
        // 리프레시 토큰이 없으면 null 반환
        return memberRepository.deleteMemRefreshTokenByMemId(loginId).memRefreshToken
    }

    fun Msave(member: MemberEntity): MemberEntity {
        return memberRepository.save(member)
    }

}