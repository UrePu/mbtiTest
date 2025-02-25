import ErrorBoundary from "./components/ErrorBoundary";
import Router from "./shared/Router";

function App() {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
}
export default App;
