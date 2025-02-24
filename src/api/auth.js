import axios from "axios";

const API_URL = "https://www.nbcamp-react-auth.link";

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);

  // JSON
  // {
  //     "id": "유저 아이디",
  //     "password": "유저 비밀번호",
  //     "nickname": "유저 닉네임"
  // }

  console.log(response.data);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login?expiresIn=10m`, userData);
  //   JSON
  // {
  //   "id":"유저 아이디",
  //   "password": "유저 비밀번호"
  // }
  return response.data;
};

export const getUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  //   JSON 응답
  // {
  //   "id": "사용자 아이디",
  //   "nickname": "사용자 닉네임",
  //   "avatar": null,
  //   "success": true
  // }
  console.log(response.data);
  return response.data;
};

export const updateProfile = async (formData, token) => {
  // 요청 시 Content-Type에 유의
  const response = await axios.patch(`${API_URL}/profile`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data);
  return response.data;
};
