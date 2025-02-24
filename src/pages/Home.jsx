import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import { useLocation } from "react-router-dom";
import PersonalityTest from "../components/PersonalityTest";

const Home = () => {
  const location = useLocation().pathname === "/";

  return (
    <>
      <Header />
      {location ? <PersonalityTest /> : <Outlet />}
    </>
  );
};

export default Home;
