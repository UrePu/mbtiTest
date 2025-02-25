import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { login } from "../api/auth";

const Login = () => {
  const { isAuthenticated, loginAuth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const password = e.target.password.value;

    const data = {
      id,
      password,
    };
    const response = await login(data);
    console.log(response);
    if (response) {
      loginAuth(response.accessToken);
      alert("로그인 성공");
      navigate("/");
    } else {
      alert("로그인 실패");
    }
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="text-center text-2xl font-bold mb-4">
        로그인 페이지 입니다
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

        <button
          type="submit"
          className="w-[500px] px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          로그인
        </button>
        <Link to="/signup" className="block text-center">
          회원가입
        </Link>
      </form>
    </div>
  );
};

export default Login;
