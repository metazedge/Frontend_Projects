import React from "react";
import Banner from "../../components/Banner/Banner";
import MostPopular from "../../components/MostPopular/MostPopular";
import GamingLibrary from "../../components/GamingLibrary/GamingLibrary";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home__wrapper container">
      <Banner />
      <MostPopular />
      <GamingLibrary />

     
    </div>
  );
};

export default Home;
