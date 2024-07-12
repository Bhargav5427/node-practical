import axios from "axios";
import React, { useRef } from "react";

const Login = () => {
  let email = useRef();
  let password = useRef();
  let handleRegister = () => {
    window.location.href = "/register";
  };
  let handleLogin = async () => {
    let data = {
      email: email.current.value,
      password: password.current.value,
    };
    let res = await axios.post("http://localhost:8001/v1/user/login", data);
    if (res) {
      localStorage.setItem("userData", JSON.stringify(res.data.data));
      window.location.href = "/";
    }
  };
  return (
    <>
      <div className="container flex h-screen justify-center items-center">
        <div className="box bg-zinc-900 h-[600px] w-[500px] rounded p-8 flex flex-col items-center justify-center">
          <div className="box-header text-2xl mb-4">Login</div>
          <div className="box-body flex flex-col gap-4 w-[400px]">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              type="text"
              ref={email}
              placeholder="Enter Email"
              className="p-2 border rounded"
            />
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              type="password"
              ref={password}
              placeholder="Enter your Password"
              className="p-2 border rounded"
            />
            <button
              className="mt-4 p-2 bg-blue-500 text-white rounded"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="mt-4 p-2 bg-blue-500 text-white rounded"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
