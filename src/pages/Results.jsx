import { useEffect, useState } from "react";
import { getTestResults } from "../api/testResults";
import ResultCard from "../components/ResultCard";

//결과보기 페이지
const Results = () => {
  const [page, setPage] = useState([]);
  useEffect(() => {
    const fetchResults = async () => {
      const results = await getTestResults();
      setPage(results);
    };
    fetchResults();
  }, []);
  return (
    <div className="flex justify-center items-center flex-col">
      {page.length === 0 ? (
        <div className="text-gray-500 text-lg mt-10">
          검사 결과가 아직 없습니다!
        </div>
      ) : (
        page.map((result, idx) => <ResultCard key={idx} page={result} />)
      )}
    </div>
  );
};

export default Results;
