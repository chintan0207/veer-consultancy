import React from "react";
import "./Cards/Card.scss";
import "./Home.scss";
import Banner from "../Banner/Banner";
import CardsContainer from "./Cards/CardsContainer";
import Review from "../Common/Review/Review";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <CardsContainer />
      <Review />
    </div>
  );
};

export default Home;
