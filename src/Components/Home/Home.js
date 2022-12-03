import React from "react";
import PostMain from "../Posts/PostMain";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-welcome">
        <div className="home-text-section">
          <h1>Welcome to the Example Social Media</h1>
          <p>
            Lorem ipsum is the industry standart for placeholder texts.I am
            using lorem to make this post look real.Be adivsed that this text
            will be removed after the production stage of the site.Lorem ipsum
            is the industry standart for placeholder texts.I am using lorem to
            make this post look real.Be adivsed that..I am using lorem to make
            this post look real.Be adivsed that
          </p>
          <p>
            Lorem ipsum is the industry standart for placeholder texts.I am
            using lorem to make this post look real.Be adivsed that this text
            will be removed after the production stage of the site.Lorem ipsum
            is the industry standart for placeholder texts.I am using lorem to
            make this post look real.Be adivsed that..I am using lorem to make
            this post look real.Be adivsed that
          </p>
        </div>
        <div className="home-img-section">
          <img
            alt="2 people working"
            className="home-img"
            src={require("../../Constant/homeImg.jpg")}
          ></img>
        </div>
      </div>
      <PostMain />
    </>
  );
};

export default Home;
