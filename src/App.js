import React, { useState } from "react";
import "./App.css";
import { MainContext } from "./MainContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
//pages
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import Admin from "./Components/Admin/Admin";
import PostComments from "./Components/Posts/PostComments";
function App() {
  const [user, setUser] = useState(true);
  const data = {
    user,
    setUser,
  };

  return (
    <div className="App">
      <BrowserRouter>
        <MainContext.Provider value={data}>
          {user && <Navbar />}
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            {user && (
              <>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/admin" element={<Admin />}></Route>
                <Route path="/post/:id" element={<PostComments />}></Route>
              </>
            )}
          </Routes>
        </MainContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
