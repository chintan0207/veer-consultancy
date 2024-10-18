import React from "react";
import "./Cards/Card.scss";
import "./Home.scss";
import Service from "../Service/Service";
import Banner from "../Banner/Banner";
import CardsContainer from "./Cards/CardsContainer";
import Work from "../Common/Workflow/Work";
import Counting from "../Common/Counting/Counting";


const Home = () => {
  return (
    <div className="home">
      <Banner />
      <CardsContainer />
      <Work/>
      <Service />
      <Counting/>
    </div>
  );
};

export default Home;
