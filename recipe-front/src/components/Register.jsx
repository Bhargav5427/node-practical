import React from "react";

const Register = () => {
  let handleLogin = () => {
    window.location.href = "/"
  };
  return (
    <>
      <div className="container flex h-screen justify-center items-center">
        <div className="box bg-slate-200 h-auto w-[500px] rounded p-8 flex flex-col items-center justify-center">
          <div className="box-header text-2xl mb-4 font-bold">Register</div>
          <div className="box-body flex flex-col gap-4 w-[400px]">
            <label htmlFor="FirstName" className="mb-2">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="p-2 border rounded"
            />
            <label htmlFor="LastName" className="mb-2">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="p-2 border rounded"
            />
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              className="p-2 border rounded"
            />
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="p-2 border rounded"
            />
            <button className="mt-4 p-2 bg-blue-500 text-white rounded">
              Register
            </button>
            <button
              className="mt-4 p-2 bg-blue-500 text-white rounded"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
