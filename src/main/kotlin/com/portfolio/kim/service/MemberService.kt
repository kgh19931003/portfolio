package com.portfolio.kim.service



import com.portfolio.kim.form.ListPagination
import com.portfolio.kim.form.MemberList
import com.portfolio.kim.form.SearchForm
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
     * 특정 회원정보 조회
     */
    fun getMemberOne(id: Long): MemberList {
        return try {
            memberRepository.findByid(id).let{
                MemberList(
                    memberIdx = it.id,
                    memberId = it.memId,
                    memberName = it.memName,
                    memberCreatedAt = it.memCreatedAt,
                    memberUpdatedAt = it.memUpdatedAt
                )
            }
        } catch (e: Exception) {
            throw Exception(e)
        }
    }

    /**
     * 특정 회원정보 조회
     */
    fun getMemberList(form: SearchForm): ListPagination<MemberList> {
        return try {
            memberDslRepository.getMemberList(form).map{
                MemberList(
                    memberIdx = it.memberIdx,
                    memberId = it.memberId,
                    memberName = it.memberName,
                    memberCreatedAt = it.memberCreatedAt,
                    memberUpdatedAt = it.memberUpdatedAt
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


    fun save(member: MemberEntity): MemberEntity {
        return memberRepository.save(member)
    }

}