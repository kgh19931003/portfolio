import React from "react"
import Slider from "react-slick"
import { Helmet } from 'react-helmet';
import '../App.css'
import '../index.css'
import PrivacyInfoList from "../components/info/privacyInfo.tsx"; // List 컴포넌트 import
import StackInfoList from "../components/info/stackInfo.tsx";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
//import Button from "../components/button/button.tsx";


const php: React.FC = () => {

    const privacyData = [
        { id: 1, name: '이름', value: '김근호' },
        { id: 2, name: '생년월일', value: '1993. 10. 03' },
        { id: 3, name: 'Addr', value: '부산 북구 화명 양달로 80-11 102동 1401호' },
        { id: 4, name: 'E-mail', value: 'sasaa3865@naver.com' },
        { id: 5, name: 'Phone', value: '010 - 7615 - 3865' },
    ];


    const stackData = [
        { id: 1, name: 'Backend', value: ['php.png'], size: ['150'] },
        { id: 2, name: '자격증', value: ['certifi.png'], size: ['130']  },
        { id: 3, name: 'Version Control', value: ['github.png', 'jenkins.png'], size: ['170', '250'] },
        { id: 4, name: 'IDE', value: ['phpstorm.png'], size: ['120'] },
        { id: 5, name: 'Flatform', value: ['docker.png'], size: ['170'] },
        { id: 6, name: 'Framework', value: ['ci4.png'], size: ['110'] },
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
                <title>PHP Portfolio</title>
                <meta name="description" content="This is the PHP portfolio page."/>
            </Helmet>


            {/* 개인정보 섹션 */}
            <div className="py-10 bg-white shadow-2xl rounded-xl max-w-4xl mx-auto mt-10">
                <div className="text-center text-2xl font-bold mb-6">Personal Information</div>
                <div className="px-6">
                    <PrivacyInfoList ListInfo={privacyData}/>
                </div>
            </div>

            {/* 소개 섹션 */}
            <div
                className="py-10 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl max-w-4xl mx-auto mt-10 shadow-md">
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
                </div>
            </div>

            {/* 스택 섹션 */}
            <div className="py-10 mb-10 bg-white shadow-2xl rounded-xl max-w-4xl mx-auto mt-6">
                <div className="text-center text-2xl font-bold mb-6">Skills & Tools</div>
                <div className="px-6">
                    <StackInfoList ListInfo={stackData}/>
                </div>
            </div>

            <div className="portfolio_list vertical">

                <div className="text-center py-10 text-3xl font-bold">Portfolio list</div>

                <div className="portfolio_block">


                    <div className="slide_div">
                        <Slider {...settings}>
                            <div>
                                <img src="/img/matchup/1.png" alt="slide_img"/>
                            </div>
                            <div>
                                <img src="/img/matchup/2.png" alt="slide_img"/>
                            </div>
                            <div>
                                <img src="/img/matchup/3.png" alt="slide_img"/>
                            </div>
                        </Slider>
                    </div>


                    <div className="slide_exp_div">

                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">프로젝트</div>
                                <div className="slide_exp_word">매치업 랜딩페이지</div>
                            </div>

                            <div>
                                <div className="slide_exp_title">URL</div>
                                <div className="slide_exp_word">
                                    <a href="https://www.match-up.co.kr/">https://www.match-up.co.kr/</a>
                                </div>
                            </div>
                        </div>


                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">작업범위</div>
                                <div className="slide_exp_word">PHP 백엔드, 프론트엔드(Jquery), 관리자 이미지 업로드 작업</div>
                            </div>
                        </div>


                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">개발환경</div>
                                <div className="slide_exp_word">cafe24 Server, PHP 7.4</div>
                            </div>
                        </div>


                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">플랫폼 설명</div>
                                <div className="slide_exp_word">

                                    매치업 플랫폼을 홍보하는 랜딩 페이지를 작업했습니다.

                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="portfolio_block vertical">


                    <div className="slide_div">
                        <Slider {...settings}>
                            <div>
                                <img src="/img/go/1.png" alt="slide_img"/>
                            </div>
                            <div>
                                <img src="/img/go/2.png" alt="slide_img"/>
                            </div>
                            <div>
                                <img src="/img/go/3.png" alt="slide_img"/>
                            </div>
                        </Slider>
                    </div>


                    <div className="slide_exp_div">

                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">프로젝트</div>
                                <div className="slide_exp_word">가자</div>
                            </div>

                            <div>
                                <div className="slide_exp_title">URL</div>
                                <div className="slide_exp_word">
                                    <a href=""></a>
                                </div>
                            </div>
                        </div>


                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">구글플레이 스토어</div>
                                <div className="slide_exp_word">
                                    현재 게시 취소됨
                                </div>
                            </div>
                        </div>

                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">앱 스토어</div>
                                <div className="slide_exp_word">
                                    현재 게시 취소됨
                                </div>
                            </div>
                        </div>


                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">작업범위</div>
                                <div className="slide_exp_word">PHP 백엔드, 프론트엔드(Jquery), <br/>하이브리드앱 작업 및 배포( AOS, IOS )
                                </div>
                            </div>
                        </div>


                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">개발환경</div>
                                <div className="slide_exp_word">cafe24 Server, PHP 7.4</div>
                            </div>
                        </div>


                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">플랫폼 설명</div>
                                <div className="slide_exp_word">

                                    플랫폼에 등록된 상점을 들려 이용시 쿠폰과 스탬프를 지급하여
                                    사용 할 수 있게 해주는 앱입니다.

                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="portfolio_block horizontal" style={{display: "block"}}>


                    <div className="slide_div" style={{width: "100%"}}>
                        <Slider {...settings}>
                            <div>
                                <img src="/img/kanta/1.png" alt="slide_img"/>
                            </div>
                            <div>
                                <img src="/img/kanta/2.png" alt="slide_img"/>
                            </div>
                            <div>
                                <img src="/img/kanta/3.png" alt="slide_img"/>
                            </div>
                            <div>
                                <img src="/img/kanta/4.png" alt="slide_img"/>
                            </div>
                            <div>
                                <img src="/img/kanta/5.png" alt="slide_img"/>
                            </div>

                        </Slider>
                    </div>


                    <div className="slide_exp_div">

                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">프로젝트</div>
                                <div className="slide_exp_word">칸타수학<br/>(교육영상 플랫폼)</div>
                            </div>

                            <div>
                                <div className="slide_exp_title">URL</div>
                                <div className="slide_exp_word">
                                    <a href="https://softer084.cafe24.com">softer084.cafe24.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">구글플레이 스토어</div>
                                <div className="slide_exp_word">
                                    <a href="https://play.google.com/store/apps/details?id=com.wizmade.kanta">스토어
                                        게시취소</a>
                                </div>
                            </div>
                        </div>


                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">작업범위</div>
                                <div className="slide_exp_word">PHP 백엔드, 프론트엔드(Jquery), <br/>하이브리드앱 작업 및 배포( AOS )</div>
                            </div>
                        </div>


                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">개발환경</div>
                                <div className="slide_exp_word">AWS S3, cafe24 Server, PHP 7.4</div>
                            </div>
                        </div>


                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">플랫폼 설명</div>
                                <div className="slide_exp_word">

                                    강의영상과 시험문제를 온라인으로 학생들에게 제공하여
                                    학습 효율을 높이는 플랫폼입니다.

                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="portfolio_block vertical">


                    <div className="slide_div">
                        <Slider {...settings}>
                            <div>
                                <img src="/img/park/1.png" alt="slide_img"/>
                            </div>
                            <div>
                                <img src="/img/park/2.png" alt="slide_img"/>
                            </div>
                            <div>
                                <img src="/img/park/3.png" alt="slide_img"/>
                            </div>
                            <div>
                                <img src="/img/park/4.png" alt="slide_img"/>
                            </div>
                            <div>
                                <img src="/img/park/5.png" alt="slide_img"/>
                            </div>

                        </Slider>
                    </div>


                    <div className="slide_exp_div">

                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">프로젝트</div>
                                <div className="slide_exp_word">주차실태조사<br/>(주차현황 조사 플랫폼)</div>
                            </div>

                            <div>
                                <div className="slide_exp_title">URL</div>
                                <div className="slide_exp_word">
                                    서비스 종료
                                </div>
                            </div>
                        </div>

                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">구글플레이 스토어</div>
                                <div className="slide_exp_word">
                                    <a href="https://play.google.com/store/apps/details?id=com.wizmade.parkingsys">주차실태조사
                                        플레이스토어 바로가기</a>
                                </div>
                            </div>
                        </div>

                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">앱 스토어</div>
                                <div className="slide_exp_word">
                                    <a href="https://apps.apple.com/us/app/%EC%A3%BC%EC%B0%A8%EC%8B%A4%ED%83%9C%EC%A1%B0%EC%82%AC/id1582133805">주차실태조사
                                        앱스토어 바로가기</a>
                                </div>
                            </div>
                        </div>

                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">작업범위</div>
                                <div className="slide_exp_word">PHP 백엔드, 프론트엔드(Jquery), <br/>하이브리드앱 작업 및 배포( IOS, AOS )
                                </div>
                            </div>
                        </div>


                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">개발환경</div>
                                <div className="slide_exp_word">AWS S3, AWS RDS, cafe24 Server, PHP 7.4</div>
                            </div>
                        </div>


                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">플랫폼 설명</div>
                                <div className="slide_exp_word">

                                    서울시 주차현황을 조사하는 플랫폼입니다.

                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="portfolio_block horizontal" style={{display: "block"}}>


                    <div className="slide_div" style={{width: "100%"}}>
                        <Slider {...settings}>
                            <div>
                                <img src="/img/lotte/1.png" alt="slide_img"/>
                            </div>
                            <div>
                                <img src="/img/lotte/2.png" alt="slide_img"/>
                            </div>
                            <div>
                                <img src="/img/lotte/3.png" alt="slide_img"/>
                            </div>
                        </Slider>
                    </div>


                    <div className="slide_exp_div">

                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">프로젝트</div>
                                <div className="slide_exp_word">롯데케미칼</div>
                            </div>

                            <div>
                                <div className="slide_exp_title">URL</div>
                                <div className="slide_exp_word">
                                    <a href="https://www.staron.com">https://www.staron.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">사용언어</div>
                                <div className="slide_exp_word">PHP 7.x</div>
                            </div>

                            <div>
                                <div className="slide_exp_title">프레임워크</div>
                                <div className="slide_exp_word">CodeIgniter 4.x</div>
                            </div>
                        </div>


                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">OS</div>
                                <div className="slide_exp_word">Linux</div>
                            </div>

                            <div>
                                <div className="slide_exp_title">Server</div>
                                <div className="slide_exp_word">Nginx</div>
                            </div>
                        </div>

                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">작업범위</div>
                                <div className="slide_exp_word">유지보수 및 추가개발
                                </div>
                            </div>
                        </div>

                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">플랫폼 설명</div>
                                <div className="slide_exp_word">

                                    인테리어 소재를 판매하는 사이트입니다.

                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="portfolio_block horizontal" style={{display: "block"}}>


                    <div className="slide_div" style={{width: "100%"}}>
                        <Slider {...settings}>
                            <div>
                                <img src="/img/ydct/1.png" alt="slide_img"/>
                            </div>
                            <div>
                                <img src="/img/ydct/2.png" alt="slide_img"/>
                            </div>
                            <div>
                                <img src="/img/ydct/3.png" alt="slide_img"/>
                            </div>
                            <div>
                                <img src="/img/ydct/4.png" alt="slide_img"/>
                            </div>
                        </Slider>
                    </div>


                    <div className="slide_exp_div">

                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">프로젝트</div>
                                <div className="slide_exp_word">영덕문화재단</div>
                            </div>

                            <div>
                                <div className="slide_exp_title">URL</div>
                                <div className="slide_exp_word">
                                    <a href="https://ydct.org">https://ydct.org</a>
                                </div>
                            </div>
                        </div>

                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">사용언어</div>
                                <div className="slide_exp_word">PHP 7.x</div>
                            </div>

                            <div>
                                <div className="slide_exp_title">프레임워크</div>
                                <div className="slide_exp_word">CodeIgniter 4.x</div>
                            </div>
                        </div>

                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">OS</div>
                                <div className="slide_exp_word">Linux</div>
                            </div>

                            <div>
                                <div className="slide_exp_title">Server</div>
                                <div className="slide_exp_word">Nginx</div>
                            </div>
                        </div>

                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">작업범위</div>
                                <div className="slide_exp_word">유지보수 및 추가개발 , 서버관리
                                </div>
                            </div>
                        </div>


                        <div className="slide_exp_line">
                            <div>
                                <div className="slide_exp_title">플랫폼 설명</div>
                                <div className="slide_exp_word">

                                    영덕문화 관광재단에서 제공하는 사이트입니다.

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


            <div className="portfolio_block horizontal" style={{display: "block"}}>


                <div className="slide_div" style={{width: "100%"}}>
                    <Slider {...settings}>
                        <div>
                            <img src="/img/sunin/1.png" alt="slide_img"/>
                        </div>
                        <div>
                            <img src="/img/sunin/2.png" alt="slide_img"/>
                        </div>
                        <div>
                            <img src="/img/sunin/3.png" alt="slide_img"/>
                        </div>
                    </Slider>
                </div>


                <div className="slide_exp_div">

                    <div className="slide_exp_line">
                        <div>
                            <div className="slide_exp_title">프로젝트</div>
                            <div className="slide_exp_word">선인</div>
                        </div>

                        <div>
                            <div className="slide_exp_title">URL</div>
                            <div className="slide_exp_word">
                                <a href="https://sib.kr">https://sib.kr</a>
                            </div>
                        </div>
                    </div>

                    <div className="slide_exp_line">
                        <div>
                            <div className="slide_exp_title">사용언어</div>
                            <div className="slide_exp_word">PHP 7.x</div>
                        </div>

                        <div>
                            <div className="slide_exp_title">프레임워크</div>
                            <div className="slide_exp_word">CodeIgniter 4.x</div>
                        </div>
                    </div>

                    <div className="slide_exp_line">
                        <div>
                            <div className="slide_exp_title">OS</div>
                            <div className="slide_exp_word">Linux</div>
                        </div>

                        <div>
                            <div className="slide_exp_title">Server</div>
                            <div className="slide_exp_word">Nginx</div>
                        </div>
                    </div>

                    <div className="slide_exp_line">
                        <div>
                            <div className="slide_exp_title">작업범위</div>
                            <div className="slide_exp_word">유지보수 및 추가개발 , 서버관리
                            </div>
                        </div>
                    </div>


                    <div className="slide_exp_line">
                        <div>
                            <div className="slide_exp_title">플랫폼 설명</div>
                            <div className="slide_exp_word">

                                선인재단에서 관리하는 사이트입니다.

                            </div>
                        </div>
                    </div>

                </div>

            </div>



</div>
)
    ;
}

export default php
