function QuestionCard({ id, question, options, type }) {
  // type이 "J/P"와 같이 주어졌다면, '/' 기준으로 분리하여 각 옵션에 매핑
  const typeValues = type.split("/");

  return (
    <div className="mb-6 border border-gray-300 rounded-lg">
      {/* 상단 영역 */}
      <div className="p-4 border-b border-gray-300">
        <label className="block text-xl font-bold">{question}</label>
      </div>

      {/* 하단 영역: 옵션들을 렌더링 */}
      <div className="p-4 flex flex-col space-y-3">
        {options.map((option, index) => (
          <div key={index} className="flex items-center cursor-pointer">
            <input
              type="radio"
              id={`question-${id}-${index}`}
              name={id} // 각 질문마다 독립된 그룹
              // value는 typeValues에서 해당 인덱스를 가져옴, 만약 없다면 기본 옵션 텍스트 사용
              value={typeValues[index] || option}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <label
              htmlFor={`question-${id}-${index}`}
              className="text-gray-700 py-2 px-3 cursor-pointer w-full"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
