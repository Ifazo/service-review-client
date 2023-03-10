import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import Cards from "../Cards/Cards";

const Services = () => {
  const {user, loading} = useContext(AuthContext);
  const services = useLoaderData();

  return (
    <>
      <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        All Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
        {services.map((service) => (
          <Cards key={service._id} services={service}></Cards>
        ))}
      </div>
    </>
  );
};

export default Services;
