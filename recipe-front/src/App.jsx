import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import { json, Navigate, Route, Routes } from "react-router-dom";
import Forms from "./components/Forms";
import RecipeList from "./components/RecipeList";
import Myrecipes from "./components/Myrecipes";

function App() {
  let getRole = JSON.parse(localStorage.getItem("userData"));
  let role = getRole;
  if (role === "" || role === null) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }
  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "30px",
        }}
      >
        <Routes>
          <Route path="/addrecipes" element={<Forms />} />
          <Route path="/allrecipes" element={<RecipeList />} />
          <Route path="/" element={<Myrecipes />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
