import axios from "axios";
import React from "react";

const Home = () => {
  axios.get("http://localhost:5000/testResults").then((response) => {
    console.log(response.data);
  });
  return <div>Home</div>;
};

export default Home;
