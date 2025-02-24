import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../api/auth";
import { createTestResult } from "../api/testResults";
import QuestionCard from "../components/QuestionCard";
import { questions } from "../data/questions";
import { calculateMBTI } from "../utils/mbtiCalculator";

const token = localStorage.getItem("token");
const Question = () => {
  const navigator = useNavigate();
  const data = questions;

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const answers = data.map((q) => ({
      type: q.type,
      answer: formData.get(String(q.id)),
    }));
    if (answers.some((a) => a.answer === null)) {
      alert("모든 문항에 답해주세요.");
      return;
    }
    const mbtiResult = calculateMBTI(answers);
    const userData = await getUserProfile(token);
    console.log(userData);
    const dateNow = new Date().toISOString().split("T")[0];
    const insertData = {
      id: userData.id,
      miti: mbtiResult,
      date: dateNow,
    };

    createTestResult(insertData);
    navigator("/results");
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
        {/* 제목 */}
        <h1 className="text-2xl font-bold mb-6">MBTI 테스트</h1>

        {/* 질문 섹션 */}
        <form onSubmit={submitHandler}>
          {data.map((q) => {
            return <QuestionCard key={q.id} {...q} />;
          })}
          {/* 제출 버튼 */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
          >
            제출하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Question;
