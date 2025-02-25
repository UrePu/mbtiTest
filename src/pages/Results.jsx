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
    <div className="flex flex-col items-center">
      {page.map((result) => (
        <ResultCard key={result.id} page={result} />
      ))}
    </div>
  );
};

export default Results;
