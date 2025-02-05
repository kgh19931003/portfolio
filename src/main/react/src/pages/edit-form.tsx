import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


interface User {
    memberIdx: number;
    memberName: string;
    memberId: string;
    memberCreatedAt: string;
}

const EditForm = () => {
    const { id } = useParams(); // URL에서 회원 ID 가져오기
    const [name, setName] = useState("");
    const [memberId, setMemberId] = useState("");
    const navigate = useNavigate();
    const isEditMode = !!id; // ID가 있으면 수정 모드, 없으면 추가 모드

    // 기존 회원 정보 불러오기 (수정 모드일 경우)
    useEffect(() => {
        if (isEditMode) {
            const fetchMember = async () => {
                try {
                    const response = await axios.get<User>(`http://kim-portfolio.p-e.kr/api/member-one/${id}`);
                    setName(response.data.memberName);
                    setMemberId(response.data.memberId);
                } catch (error) {
                    alert("회원 정보를 불러오지 못했습니다.");
                }
            };
            fetchMember();
        }
    }, [id, isEditMode]);

    // 저장 (추가 또는 수정)
    const handleSubmit = async () => {
        if (!name.trim() || !memberId.trim()) {
            alert("이름과 아이디를 입력하세요!");
            return;
        }

        try {
            if (isEditMode) {
                // 수정 요청
                await axios.put(`http://kim-portfolio.p-e.kr/api/member-update/${id}`, {
                    memberName: name,
                    memberId: memberId,
                });
                alert("회원 정보 수정 완료!");
                location.href = "http://kim-portfolio.p-e.kr/react-table"
            } else {
                // 추가 요청
                await axios.post("http://kim-portfolio.p-e.kr/api/member-create", {
                    memberName: name,
                    memberId: memberId,
                });
                alert("회원 추가 완료!");
                location.href = "http://kim-portfolio.p-e.kr/react-table"
            }
            navigate("/"); // 리스트 페이지로 이동
        } catch (error) {
            alert(isEditMode ? "수정 실패" : "추가 실패");
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">{isEditMode ? "회원 수정" : "회원 추가"}</h2>

            <label className="block mb-2">아이디</label>
            <input
                type="text"
                className="border p-2 w-full mb-4"
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
                disabled={isEditMode} // 수정 모드에서는 아이디 변경 불가능
            />

            <label className="block mb-2">이름</label>
            <input
                type="text"
                className="border p-2 w-full mb-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />


            <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleSubmit}
            >
                {isEditMode ? "수정하기" : "추가하기"}
            </button>
        </div>
    );
};

export default EditForm;