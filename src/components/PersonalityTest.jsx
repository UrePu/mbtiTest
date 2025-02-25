import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PersonalityTest() {
  const { isAuthenticated } = useAuth();
  const navigator = useNavigate();

  const clickHandler = () => {
    if (isAuthenticated) {
      navigator("/question");
    } else {
      alert("로그인이 필요한 페이지 입니다.");
      navigator("/login");
    }
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* 헤더 영역 */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">무료 성격 테스트</h2>
        <p className="text-gray-600">
          자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
        </p>
      </div>

      {/* 카드 영역 (flex 사용) */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* 1. 성격 유형 검사 */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">성격 유형 검사</h3>
          <p className="text-gray-600">
            자신의 성격 유형을 파악하고 싶어 여러 영역에서 어떤 영향을 미치는지
            알아보세요.
          </p>
        </div>

        {/* 2. 성격 유형 이해 */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">성격 유형 이해</h3>
          <p className="text-gray-600">
            다른 사람들이 어떻게 행동하고 이해하는지 알면 도움을 줄 수 있어요.
          </p>
        </div>

        {/* 3. 팀 평가 */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">팀 평가</h3>
          <p className="text-gray-600">
            팀 내에서 자신의 동료들의 성격 유형을 이해하고 협력할 수 있는 방법을
            배워보세요.
          </p>
        </div>
      </div>

      {/* 버튼 영역 */}
      <div className="text-center mt-10">
        <button
          onClick={clickHandler}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
        >
          내 성격 알아보러 가기
        </button>
      </div>
    </div>
  );
}

export default PersonalityTest;
