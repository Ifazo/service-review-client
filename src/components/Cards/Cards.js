import React from "react";

const Cards = ({ services }) => {
  const { _id, name, price, description, img } = services;
  // console.log(services);
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt=""/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="card-title">${price}</p>
          <p>{description.slice(0, 100)}</p>
          <div className="card-actions justify-end">
            <a href={`services/${_id}`} className="btn btn-primary">
              Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
