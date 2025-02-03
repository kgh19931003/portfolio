package com.portfolio.kim.controller


import com.portfolio.kim.form.ListPagination
import com.portfolio.kim.form.MemberList
import com.portfolio.kim.form.SearchForm
import com.portfolio.kim.orm.jpa.MemberEntity
import com.portfolio.kim.orm.jpa.MemberRepository
import com.portfolio.kim.service.MemberService
import jakarta.transaction.Transactional
import org.springframework.web.bind.annotation.*
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

@RestController
@RequestMapping("/api") // API 요청을 위한 기본 경로
class ApiController (
    private val memberService: MemberService,
    private val memberRepository: MemberRepository
){

    @GetMapping("/member-one/{id}")
    fun memberOne(@PathVariable id: Long): MemberList {
        return memberService.getMemberOne(id)
    }


    @GetMapping("/member-list")
    fun memberList(form: SearchForm): ListPagination<MemberList> {
        return memberService.getMemberList(form)
    }

    @PostMapping("/member-create")
    @Transactional
    fun memberCreate(@RequestBody form: SearchForm): MemberEntity {
        val memberEntity = MemberEntity(
            memId = form.memberId!!,
            memName = form.memberName!!,
            memCreatedAt = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"))
        )

        return memberService.save(memberEntity)
    }

    @PutMapping("/member-update/{id}")
    @Transactional
    fun memberUpdate(@PathVariable id: Long, @RequestBody form: SearchForm): MemberEntity {
        val member = memberRepository.findByMemId(form.memberId!!)

        // 직접 객체의 필드를 수정
        member.id = id
        member.memName = form.memberName
        member.memUpdatedAt = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"))

        // 수정된 객체를 저장
        return memberService.save(member)
    }

    @DeleteMapping("/member-delete/{id}")
    @Transactional
    fun memberDelete(@PathVariable id: Long) {
        return memberRepository.deleteById(id)
    }
}
