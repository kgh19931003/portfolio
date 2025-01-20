import React from "react";
import {Helmet} from "react-helmet"; // List 컴포넌트 import
import '../App.css'
import '../index.css'
import ServerInfoList from "../components/info/serverInfo.tsx";
import PrivacyInfoList from "../components/info/privacyInfo.tsx";
import StackInfoList from "../components/info/stackInfo.tsx";


const kotlin: React.FC = () => {

    const serverData = [
        { id: 1, name: 'OS', value: 'Linux - Docker' },
        { id: 1, name: 'Backend', value: 'Kotlin + Boot Spring' },
        { id: 1, name: 'Frontend', value: 'REACT + Vite' },
        { id: 1, name: 'Database', value: 'Mysql' },
        { id: 1, name: 'IDE', value: 'Intellij Ultimate' },
    ];


    const privacyData = [
        { id: 1, name: '생년월일', value: '1993. 10. 03' },
        { id: 1, name: 'Addr', value: '부산 북구 화명 양달로 80-11 102동 1401호' },
        { id: 1, name: 'E-mail', value: 'sasaa3865@naver.com' },
        { id: 1, name: 'Phone', value: '010 - 7615 - 3865' },
    ];


    const stackData = [
        { id: 1, name: 'Backend', value: ['kotlin.png'], size: ['200'] },
        { id: 1, name: '자격증', value: ['certifi.png'], size: ['130']  },
        { id: 1, name: 'Version Control', value: ['github.png', 'jenkins.png'], size: ['170', '250'] },
        { id: 1, name: 'IDE', value: ['intellij.png'], size: ['120'] },
        { id: 1, name: 'Flatform', value: ['docker.png'], size: ['170'] },
        { id: 1, name: 'Framework', value: ['boot_spring.png'], size: ['170'] },
    ];


    return (
        <div className="App" >

            <Helmet>
                <title>Kotlin Portfolio</title>
                <meta name="description" content="This is the Kotlin portfolio page." />
            </Helmet>

            <div className="text-left fixed w-72 py-2 px-4 rounded-lg shadow-md text-black bg-transparent">
                <table>
                    <ServerInfoList ListInfo={serverData} />
                </table>
            </div>


            <div className="user_form">

                <div className="line">
                    <div className="flex" style={{padding: "50px 0px"}}>
                        <div className="user_info">
                            <PrivacyInfoList ListInfo={privacyData}/>
                        </div>
                    </div>
                </div>


            </div>


            <div className="user_career_2">

            <div className="user_career_reason_2">
                    <ul className="user_career_reason_ul_2">


                        <li className="user_career_reason_li_2">


                            <div className="user_career_reason_div_2">
                                <div style={{ display: "inline-block"}}>

                                    <div className="max-w-7xl">
                                        <StackInfoList ListInfo={stackData} />
                                    </div>

                                </div>
                            </div>


                        </li>
                    </ul>
                </div>

            </div>


        </div>
    );
}

export default kotlin
