import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginPage from "./pages/Login";
import { MainContent } from "./components";
import Navbar from "./components/Navbar";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  const loginCbHandler = (result) => {
    setLoginStatus(result);
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, [loginStatus]);

  return (
    <>
      <div className="container-fluid">
        {loginStatus ? (
          <div>
            <Navbar
              loginStatus={loginStatus}
              loginCbHandler={loginCbHandler}
            ></Navbar>
            <MainContent></MainContent>
          </div>
        ) : (
          <LoginPage loginCbHandler={loginCbHandler}></LoginPage>
        )}
      </div>
    </>
  );
}

export default App;
