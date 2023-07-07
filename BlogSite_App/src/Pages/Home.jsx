import React from "react";
import Blogs from "../components/Blogs";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import "./Home.css";

const Home = () => {
  return (
    <div className="main_content">
      <Header />
      <div className="content">
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
