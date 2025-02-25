import { useState } from "react";
import {
  deleteTestResult,
  updateTestResultVisibility,
} from "../api/testResults";

const IsCurrent = ({ id, visibility }) => {
  const [isVisible, setIsVisible] = useState(visibility);

  const deleteClickHandler = async () => {
    deleteTestResult(id);

    alert("삭제가 완료되었습니다.");
    navigator("/results");
  };
  const visibleClickHandler = async () => {
    setIsVisible(!isVisible);
    const response = await updateTestResultVisibility(id, isVisible);
    console.log(response);
  };

  return (
    <div>
      <button
        onClick={visibleClickHandler}
        className="bg-blue-500 px-2 py-1 rounded hover:bg-blue-900"
      >
        {isVisible ? "공개" : "숨기기"}
      </button>
      <button
        onClick={deleteClickHandler}
        className="ml-3 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-900"
      >
        삭제
      </button>
    </div>
  );
};

export default IsCurrent;
