import React from "react";
import homeImage from "../assets/images/main-picture.jpg";

const Home = () => {
  return (
    <div>
      <img src={homeImage} alt="Team Image" className="home-image" />
    </div>
  );
};

export default Home;
