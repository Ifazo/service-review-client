import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ services }) => {
  const { _id,name, price, description } = services;
  console.log(services);
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>${price}</p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`services/${_id}`} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
