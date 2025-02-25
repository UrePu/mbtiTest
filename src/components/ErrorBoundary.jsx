import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // 에러가 발생하면 state를 업데이트
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // 실제 에러 로깅이 필요한 경우 여기서 처리
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error, info);
    // 예: Sentry, LogRocket 등 외부 서비스로 로그 전송
  }

  render() {
    if (this.state.hasError) {
      // 에러가 발생했을 때 보여줄 UI
      return (
        <div className="p-4 bg-red-200 text-red-800">
          <h1 className="font-bold">에러가 발생했습니다.</h1>
          <p>잠시 후 다시 시도해주세요.</p>
        </div>
      );
    }
    // 에러가 없으면 자식 컴포넌트를 그대로 렌더링
    return this.props.children;
  }
}

export default ErrorBoundary;
