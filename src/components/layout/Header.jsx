import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { isAuthenticated, logoutAuth } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    logoutAuth();

    alert("로그아웃 되었습니다");
    navigate("/");
  };

  return (
    <div className="flex justify-between p-4 bg-gray-800 text-white">
      <Link to="/">홈</Link>
      <div>
        {isAuthenticated ? (
          <div className="flex items-center">
            <Link to="/Profile">내 정보</Link>
            <Link to="/Results" className="ml-4">
              결과 보기
            </Link>
            <button className="ml-4" onClick={logoutHandler}>
              로그아웃
            </button>
          </div>
        ) : (
          <div>
            <Link to="/login">로그인</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
