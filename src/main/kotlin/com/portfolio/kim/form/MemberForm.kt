package com.bs.wfund_search.form

import java.math.BigDecimal

data class MemberForm(
    var clientCode: String = "base",
    var memberId: String? = null,
)


data class MemberList(
    val memberId: String? = null,
    val memberName: String? = null,
    val memberMySeller: String? = null
)