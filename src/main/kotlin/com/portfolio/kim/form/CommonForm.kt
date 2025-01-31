package com.bs.wfund_search.form

import com.portfolio.kim.form.ListForm
import java.time.LocalDate

data class SearchForm(
    var fromDate: LocalDate? = null,
    var toDate: LocalDate? = null,
    var memberIdx: Int = 0,
    var memberId: String? = null,
    var memberName: String? = null
) : ListForm()


