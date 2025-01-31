package com.portfolio.kim.orm.jooq


import com.bs.wfund_search.form.MemberList
import com.bs.wfund_search.form.SearchForm
import com.portfolio.kim.form.ListPagination
import com.portfolio.kim.jooq.portfolio.tables.references.MEMBER
import com.portfolio.kim.proto.isNotNull
import com.portfolio.kim.proto.`when`
import org.jooq.*
import org.jooq.impl.DSL
import org.springframework.stereotype.Repository

@Repository
class MemberDslRepository(
    private val dsl: DSLContext,
) {
    fun getMemberQuery(form: SearchForm): SelectConditionStep<Record5<Int?, String?, String?, String?, String?>> {
        return dsl.select(
                MEMBER.MEM_IDX.`as`("memberIdx"),
                MEMBER.MEM_ID.`as`("memberId"),
                MEMBER.MEM_NAME.`as`("memberName"),
                MEMBER.MEM_CREATED_AT.`as`("memberCreatedAt"),
                MEMBER.MEM_UPDATED_AT.`as`("memberUpdatedAt")
            )
            .from(MEMBER)
            .where(DSL.noCondition())
            .`when`(form.memberId.isNotNull(), MEMBER.MEM_ID.eq(form.memberId))
    }


    fun getMemberOne(form: SearchForm): List<MemberList> {
        return getMemberQuery(form).fetch { it.into(MemberList::class.java) }
    }

    fun getMemberList(form: SearchForm): ListPagination<MemberList> {
        val query = getMemberQuery(form)
        return ListPagination.of(dsl, query, form) { record ->
            record.into(MemberList::class.java)
        }
    }

}