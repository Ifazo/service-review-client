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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
      {
        services.map(service => <Cards key={service._id} services={service}></Cards>)
      }
      </div>
    </div>
  );
};

export default Home;
