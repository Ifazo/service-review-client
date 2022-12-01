import React, { useContext, useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import ServiceReviews from "../Reviews/ServiceReviews";
import AddReviews from "../Reviews/AddReviews";
import { AuthContext } from "../../Contexts/AuthProvider";

const CardDetails = () => {
  const {user, loading } = useContext(AuthContext);
  const service = useLoaderData();
  const { _id, name, price, description, img } = service;

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?serviceId=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [_id]);

  return (
    <>
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Service Name: {name}
              </span>
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                Price: {price}
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              {description}
            </p>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <figure>
              <PhotoProvider>
                <PhotoView src={img}>
                  <img
                    className="w-full rounded-lg"
                    src={img}
                    alt=""
                    width="1310"
                    height="873"
                  />
                </PhotoView>
              </PhotoProvider>
            </figure>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 m-5 justify-between">
        {reviews.map((review) => (
          <ServiceReviews key={_id} review={review}></ServiceReviews>
        ))}
      </div>
      <div>
      {
        user?.email ? <><AddReviews key={_id} service={service}></AddReviews></> 
        : <><h2 className="text-xl font-bold text-blue-600">Please Login to add Reviews!!</h2></>
      }
      </div>
    </>
  );
};

export default CardDetails;
