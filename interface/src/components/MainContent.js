import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, AboutUs, Post, ContactUs, EditPost } from "../pages";

const MainContent = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="aboutus" element={<AboutUs></AboutUs>}></Route>
        <Route path="contactus" element={<ContactUs></ContactUs>}></Route>

        <Route path="posts" element={<Post></Post>}>
          <Route path="edit">
            <Route path=":id" element={<EditPost></EditPost>}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MainContent;
