package com.bs.wfund_search.form

import com.portfolio.kim.form.ListForm
import java.time.LocalDate

data class SearchForm(
    var fromDate: LocalDate? = null,
    var toDate: LocalDate? = null,
    var clientCode: String = "",
    var memberId: String? = null
) : ListForm()


data class VbankSearchForm(
    var memberName: String? = null,
    var vbankAccount: String? = null,
    var realBankUser: String? = null,
    var realBankAccount: String? = null
) : ListForm()