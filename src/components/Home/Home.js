import React from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import Carousel from "./Carousel";

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <h2>Users: {services.length}</h2>
      <Carousel></Carousel>
      {
        services.map(service => <Cards key={service._id} services={service}></Cards>)
      }
    </div>
  );
};

export default Home;
