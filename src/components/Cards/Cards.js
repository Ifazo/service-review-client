import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ services }) => {
  const { _id, name, price, description, img } = services;
  console.log(services);
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt=""/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="card-title">${price}</p>
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
