import axios from "axios";

const API_URL = "https://swanky-motley-move.glitch.me/testResults";

export const getTestResults = async (id) => {
  if (id) {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  }
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await axios.post(API_URL, resultData);
  return response.data;
};

export const deleteTestResult = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  const response = await axios.patch(`${API_URL}/${id}`, { visibility });
  return response.data;
};
