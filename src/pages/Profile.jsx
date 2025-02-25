import { useEffect, useState } from "react";
import { getUserProfile, updateProfile } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState({});
  const { logoutAuth } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchUserProfile = async () => {
      try {
        const profile = await getUserProfile(token);
        if (!profile) {
          // 프로필을 정상적으로 불러오지 못하면 로그인 페이지로 이동
          navigate("/login");
          return;
        }
        setUserProfile(profile);
      } catch (error) {
        logoutAuth(false);
        // 에러 응답이 401인 경우 토큰 만료 처리
        if (error.response && error.response.status === 401) {
          alert("토큰이 만료되었습니다. 다시 로그인 해주세요.");
        } else {
          alert("프로필을 불러오는 중 문제가 발생했습니다.");
        }
        navigate("/login");
      }
    };
    fetchUserProfile();
  }, [navigate, logoutAuth]);

  const submitHandle = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const newNickname = { nickname: e.target[0].value };
    try {
      const response = await updateProfile(newNickname, token);
      console.log(response);
      if (response && response.success) {
        alert("닉네임이 변경되었습니다.");
        setUserProfile((prev) => ({ ...prev, nickname: response.nickname }));
      }
    } catch (error) {
      logoutAuth(false);
      if (error.response && error.response.status === 401) {
        alert("토큰이 만료되었습니다. 다시 로그인 해주세요.");
      } else {
        alert("닉네임 변경에 실패했습니다.");
      }
      navigate("/login");
    }
  };

  return (
    <div className="p-4 w-full flex justify-center items-center">
      <div>
        <div>id : {userProfile.id}</div>
        <div>nickname : {userProfile.nickname}</div>
        <div className="mt-4">
          <span className="block font-semibold mb-2">닉네임 변경</span>
          <form onSubmit={submitHandle}>
            <input
              type="text"
              placeholder="닉네임을 입력하세요"
              className="border border-gray-300 rounded-lg p-1 focus:outline-none"
            />
            <button
              type="submit"
              className="ml-2 px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              변경
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
