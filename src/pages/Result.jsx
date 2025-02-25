import { Link } from "react-router-dom";
import { useMyTypeStore } from "../store/myTypeStroe";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

const Result = () => {
  const { myType } = useMyTypeStore();
  const data = mbtiDescriptions[myType];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow text-center">
        {/* 헤더 영역 */}
        <h1 className="text-2xl font-bold mb-4">당신의 MBTI는?</h1>

        {/* MBTI 타입 */}
        <p className="text-xl font-semibold text-center text-blue-600">
          {myType}
        </p>

        {/* MBTI 설명 영역 */}
        <p className="mt-6 text-gray-700 leading-relaxed whitespace-pre-line text-start">
          {data}
        </p>

        {/* 다른 사람들의 결과 보기 버튼 */}
        <Link
          to="/results"
          className="inline-block mt-6 px-4 py-2 text-white bg-blue-500 
                     rounded hover:bg-blue-600 transition-colors"
        >
          다른 사람들의 결과도 보러가기
        </Link>
      </div>
    </div>
  );
};

export default Result;
