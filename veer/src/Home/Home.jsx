import React from "react";
import "./Cards/Card.scss";
import "./Home.scss";
import Service from "../Service/Service";
import Banner from "../Banner/Banner";
import CardsContainer from "./Cards/CardsContainer";


const Home = () => {
  return (
    <div className="home">
      <Banner />
      <CardsContainer />
      <Service />
    </div>
  );
};

export default Home;
