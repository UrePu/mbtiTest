import { useEffect, useState } from "react";
import { getUserProfile } from "../api/auth";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import { deleteTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";

const token = localStorage.getItem("token");

const ResultCard = ({ page }) => {
  // 현재 로그인한 사용자 정보
  const [currentUser, setCurrentUser] = useState(null);
  const { id, mbti, date, nickname } = page;
  const navigator = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserProfile(token);
        setCurrentUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);
  const clickHandler = async () => {
    deleteTestResult(id);

    alert("삭제가 완료되었습니다.");
    navigator("/results");
  };

  // 현재 사용자와 page의 작성자가 같은지 여부
  const isCurrentUser = currentUser?.id === id;
  const description = mbtiDescriptions[mbti];

  return (
    <div
      className={`p-4 w-[800px] mt-6 rounded-md shadow mb-4 transition-colors 
        bg-gray-800 text-white rounded-lg
      `}
    >
      <div className="flex justify-between items-center">
        {/* 닉네임 */}
        <div className="font-semibold">{`${nickname}의 결과`}</div>
        {/* 날짜 */}
        <div className="text-sm text-gray-300">{date}</div>
      </div>

      {/* MBTI 타입 */}
      <div className="flex justify-between items-center">
        {/* MBTi */}
        <div className="text-xl font-bold mt-2">{mbti}</div>
        {/*  */}
        {isCurrentUser ? (
          <button
            className="p-2 text-sm text-gray-300 bg-red-500 rounded-lg"
            onClick={clickHandler}
          >
            삭제
          </button>
        ) : null}
      </div>

      <p className="mt-2 text-gray-200 leading-relaxed">{description}</p>
    </div>
  );
};

export default ResultCard;
