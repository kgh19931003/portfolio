package com.portfolio.kim.orm.jooq

import com.bs.wfund_search.form.MemberList
import com.bs.wfund_search.form.SearchForm
import com.portfolio.kim.jooq.portfolio.tables.references.MEMBER
import org.jooq.DSLContext
import org.jooq.Record2
import org.jooq.Record3
import org.jooq.SelectConditionStep
import org.springframework.stereotype.Repository

@Repository
class MemberDslRepository(
    private val dsl: DSLContext,
) {
    fun getMemberQuery(form: SearchForm): SelectConditionStep<Record2<String?, String?>> {

        return dsl.select(
            MEMBER.MEM_ID.`as`("memberId"),
            MEMBER.MEM_NAME.`as`("memberName"),
        )
            .from(MEMBER)
            .where(MEMBER.MEM_ID.eq(form.memberId))
    }


    fun getMemberOne(form: SearchForm): List<MemberList> {
        return getMemberQuery(form).fetch { it.into(MemberList::class.java) }
    }

}