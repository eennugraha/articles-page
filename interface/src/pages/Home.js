import React from "react";
import Navbar from "../components/Navbar";

const Home = (props) => {
  const { loginStatus, loginCbHandler } = props;

  return (
    <>
      <Navbar
        loginStatus={loginStatus}
        loginCbHandler={loginCbHandler}
      ></Navbar>
      <h1>Home Page</h1>
    </>
  );
};

export default Home;
