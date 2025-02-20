import axios from "axios";
import { login } from "../api/auth";

const Home = () => {
  axios.get("http://localhost:5000/testResults").then((response) => {
    console.log(response.data);
  });

  const test = async () => {
    const answer = await login({
      id: "test3142",
      password: "test",
    });
    console.log(answer);
  };
  test();
  return <div>Home</div>;
};

export default Home;
