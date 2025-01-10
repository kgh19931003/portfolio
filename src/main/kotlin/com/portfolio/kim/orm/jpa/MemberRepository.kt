package com.portfolio.kim.orm.jpa

import com.portfolio.kim.orm.jpa.MemberEntity
import org.jooq.impl.QOM.Uuid
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface MemberRepository : JpaRepository<MemberEntity, Long> {
    fun existsByMemId(memId: String): Boolean

    fun findByMemId(memId: String): MemberEntity

    fun findByMemIdAndMemRefreshToken(memId: String, memUuid: String): MemberEntity

    fun deleteMemAccessTokenByMemId(memId: String): MemberEntity

    fun deleteMemRefreshTokenByMemId(memId: String): MemberEntity
}