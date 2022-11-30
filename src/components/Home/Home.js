import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import Hero from "../styles/Hero";
import Newsletter from "../styles/Newsletter";
import Carousel from "./Carousel";

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <Carousel></Carousel>
      <Hero></Hero>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
        {
        services.map((service) => (<Cards key={service._id} services={service}></Cards>))
        }
      </div>
      <button
        type="button"
        className="relative inline-flex items-center px-4 py-2 my-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <Link to="/services">See All</Link>
      </button>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
