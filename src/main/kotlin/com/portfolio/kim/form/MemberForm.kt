package com.portfolio.kim.form

import java.math.BigDecimal

data class MemberForm(
    var clientCode: String = "base",
    var memberId: String? = null,
)


data class MemberList(
    val memberIdx: Long?,
    val memberId: String? = null,
    val memberName: String? = null,
    val memberCreatedAt: String? = null,
    val memberUpdatedAt: String? = null,
)