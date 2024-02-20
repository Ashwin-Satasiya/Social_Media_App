import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostLists from "./components/PostLists";
import PostListWrapper from "./store/postList_store";
import { Outlet } from "react-router-dom";
function App() {

  return (
    <>
      <PostListWrapper>
        <div className="main-container">
          <Sidebar  />
          <div className="content">
            <Header />
            <Outlet/>
            <Footer />
          </div>
        </div>
      </PostListWrapper>
    </>
  );
}

export default App;
