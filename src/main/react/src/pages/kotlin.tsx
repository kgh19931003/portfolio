import React from "react";
import {Helmet} from "react-helmet"; // List 컴포넌트 import
import '../App.css'
import '../index.css'
import PrivacyInfoList from "../components/info/privacyInfo.tsx";
import StackInfoList from "../components/info/stackInfo.tsx";
import Button from "../components/button/button.tsx";
import Slider from "react-slick";



const kotlin: React.FC = () => {


    const privacyData = [
        { id: 1, name: '이름', value: '김근호' },
        { id: 2, name: '생년월일', value: '1993. 10. 03' },
        { id: 3, name: 'Addr', value: '부산 북구 화명 양달로 80-11 102동 1401호' },
        { id: 4, name: 'E-mail', value: 'sasaa3865@naver.com' },
        { id: 5, name: 'Phone', value: '010 - 7615 - 3865' },
    ];


    const stackData = [
        { id: 1, name: 'Backend', value: ['kotlin.png'], size: ['200'] },
        { id: 2, name: '자격증', value: ['certifi.png'], size: ['130']  },
        { id: 3, name: 'Version Control', value: ['github.png', 'jenkins.png'], size: ['170', '250'] },
        { id: 4, name: 'IDE', value: ['intellij.png'], size: ['120'] },
        { id: 5, name: 'Flatform', value: ['docker.png'], size: ['170'] },
        { id: 6, name: 'Framework', value: ['boot_spring.png'], size: ['170'] },
    ];


    const settings = {
        dots: true,
        infinite: false,
        arrow:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="App">

            <Helmet>
                <title>Kotlin Portfolio</title>
                <meta name="description" content="This is the Kotlin portfolio page."/>
            </Helmet>


            <div className="text-left fixed w-72 py-0 px-4 rounded-lg z-50 ">
                <Button label="PHP 포트폴리오" bg="bg-black" onClick={() => {
                    window.open("http://kim-portfolio.p-e.kr/php", "_blank", "noopener,noreferrer");
                }}/>
            </div>

            <div className="text-left fixed w-72 top-24 left-0 py-0 px-4 rounded-lg z-50 ">
                <Button label="게시판 구현" bg="bg-blue-500" onClick={() => {
                    window.open("http://kim-portfolio.p-e.kr/react-table", "_blank", "noopener,noreferrer");
                }}/>
            </div>

            <div className="text-left fixed w-72 top-36 left-0 py-0 px-4 rounded-lg z-50 ">
                <Button label="전자정부 프레임워크" bg="bg-blue-500" onClick={() => {
                    window.open("http://kim-portfolio.p-e.kr:8080", "_blank", "noopener,noreferrer");
                }}/>
            </div>

            {/* 개인정보 섹션 */}
            <div className="py-10 bg-white shadow-2xl rounded-xl max-w-4xl mx-auto mt-10">
                <div className="text-center text-2xl font-bold mb-6">Personal Information</div>
                <div className="px-6">
                    <PrivacyInfoList ListInfo={privacyData}/>
                </div>
            </div>


            {/* 소개 섹션 */}
            <div
                className="py-10 mb-10 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl max-w-4xl mx-auto mt-10 shadow-md">
                <div className="px-6 text-center">
                    <div>저는 PHP 개발자로 5년간 다양한 프로젝트를 수행하며 웹 개발의 기본기를 다져온 개발자 김근호 입니다.</div>
                    <div>지금까지의 경험을 기반으로 더 깊이 있는</div>
                    <div>기술적 도전과 성장을 이루고자 Java 개발자로의 전환을 결심하게 되었습니다.</div>
                    <br/><br/>

                    <div>PHP로 경력을 시작한 이후, 중소규모의 웹 서비스의 다양한 프로젝트를 경험하였으며</div>
                    <div>특히, 백엔드 아키텍처 설계, RESTful API</div>
                    <div>개발, 데이터베이스 설계 및 최적화에 강점을 가지며, 사용자 중심의 안정적인 서비스를 개발하는 데 주력해 왔습니다.</div>
                    <br/><br/>
                    <div>또한, 팀 내에서는 코드 리뷰와 협업</div>
                    <div>도구를 활용해 효율적인 협업 문화를 조성하는 데 기여했습니다.</div>
                    <br/><br/>

                    <div>PHP는 빠른 개발 속도와 접근성 덕분에 훌륭한 도구지만, 더욱 확장성 있는 시스템 설계와 성능 최적화가 필요한 환경에서</div>
                    <div>Java가 제공하는 강력한 프레임워크와 객체지향 프로그래밍의 이점을 느끼게 되었습니다.</div>
                    <br/><br/>
                    <div>특히, Spring Framework와 같은 Java 기반 기술 스택은 대규모 프로젝트와</div>
                    <div>엔터프라이즈 시스템 구축에 최적화되어 있으며, 체계적인 환경을 자랑하기 때문에 전향을 생각하게 되었습니다.</div>
                    <br/><br/>

                    <div>Java로 전환을 위해 기본 문법과 객체지향 개념을 학습했으며,</div>
                    <div>현재는 Spring Boot를 활용한 웹 애플리케이션 개발에 매진하고 있습니다.</div>
                    <br/><br/>
                    <div>개인적으로 현재 보이는 포트폴리오 사이트를 작업하며</div>
                    <div>MVC 아키텍처, 데이터베이스 연동(JPA/Hibernate, Jooq), REST API 구축 등을 경험하였고,</div>
                    <div>이를 통해 Java의 생태계에 대한 이해도를 높였습니다.</div>
                </div>
            </div>


            <div className="user_career_2">

                <div className="user_career_reason_2">
                    <ul className="user_career_reason_ul_2">
                        <li className="user_career_reason_li_2">

                            <div className="user_career_reason_div_2">
                                <div style={{display: "inline-block"}}>

                                    <div className="max-w-7xl">
                                        <StackInfoList ListInfo={stackData}/>
                                    </div>

                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>


            <div className="portfolio_list">

                <div className="text-center py-10 text-3xl font-bold">Portfolio list</div>

                <div className="portfolio_block horizontal" style={{display: "block"}}>


                    <div className="slide_div" style={{width: "100%"}}>
                        <Slider {...settings}>
                            <div>
                                <img src="/img/kotlin/1.png" alt="slide_img"/>
                            </div>
                            <div>
                                <img src="/img/kotlin/2.png" alt="slide_img"/>
                            </div>
                        </Slider>
                    </div>


                    <div className="slide_exp_div">

                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">프로젝트</div>
                                <div className="slide_exp_word">현재 사이트</div>
                            </div>

                            <div>
                                <div className="slide_exp_title">URL</div>
                                <div className="slide_exp_word">
                                    <a href="http://kim-portfolio.p-e.kr/kotlin">http://kim-portfolio.p-e.kr/kotlin</a>
                                </div>
                            </div>
                        </div>

                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">Github Url</div>
                                <div className="slide_exp_word">
                                    <a href="https://github.com/kgh19931003/portfolio">https://github.com/kgh19931003/portfolio</a>
                                </div>
                            </div>
                        </div>


                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">작업범위</div>
                                <div className="slide_exp_word">Kotlin boot-spring 서버 작업 및 React vite 프론트엔드 작업</div>
                            </div>
                        </div>


                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">IDE</div>
                                <div className="slide_exp_word">Intellij Ultimate</div>
                            </div>
                        </div>


                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">Server</div>
                                <div className="slide_exp_word">Linux - Docker</div>
                            </div>
                        </div>


                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">플랫폼 설명</div>
                                <div className="slide_exp_word">

                                    부트스프링과 리액트를 사용하여
                                    백엔드와 프론트엔드를 어느정도 까지 사용 할 수 있는지 보여드리기 위하여 제작하였습니다.


                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>

    )
        ;
}

export default kotlin
