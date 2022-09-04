import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const { loginCbHandler } = props;
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const loginUser = async () => {
    try {
      let result = await axios({
        method: "POST",
        url: `http://localhost:3000/api/users/login`,
        data: form,
      });
      const access_token = result.data.access_token;
      localStorage.setItem("access_token", access_token);
      loginCbHandler(true);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const submitHandler = () => {
    loginUser();
  };

  return (
    <>
      <div className="login-page">
        <div className="login-component">
          <div className="my-3 w-100 text-center">
            <h3>Login</h3>
          </div>
          <div className="w-100">
            <div className="input-group mb-3">
              <span className="input-group-text">@</span>
              <input
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                type="text"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text w-20">@</span>
              <input
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                type="PASSWORD"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <button
                onClick={() => submitHandler()}
                className="btn btn-sm btn-success"
              >
                LOGIN
              </button>
            </div>
            <div className="mb-3">
              <button
                onClick={() => submitHandler()}
                className="btn btn-sm btn-success"
              >
                REGISTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
