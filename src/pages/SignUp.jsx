import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const password = e.target.password.value;
    const nickname = e.target.nickname.value;

    const data = {
      id,
      password,
      nickname,
    };

    const response = await register(data);

    if (response) {
      alert("회원가입 성공");
      navigate("/login");
    } else {
      alert("회원가입 실패");
    }
  };
  return (
    <div className="flex flex-col items-center mt-20">
      <div className="text-center text-2xl font-bold mb-4">
        회원가입 페이지입니다.
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            id="id"
            placeholder="아이디"
            className="w-[500px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="비밀번호"
            className="w-[500px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* <div>
          <input
            type="password"
            id="passwordCheck"
            placeholder="비밀번호 확인"
            className="w-[500px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}
        <div>
          <input
            type="text"
            id="nickname"
            placeholder="닉네임"
            className="w-[500px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-[500px] px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUp;
