import React from "react";

const ServiceReviews = ({ review }) => {
  console.log(review);
  const { name, description, displayName, photoURL} = review;

  return (
    <>
      <div class="flex flex-col sm:flex-row">
        <div class="mt-6 order-2 sm:mt-0 sm:ml-16">
          <h3 class="text-sm font-medium text-gray-900">{name}</h3>

          <div class="mt-3 space-y-6 text-sm text-gray-600">
            <p>{description}</p>
          </div>
        </div>

        <div class="order-1 flex items-center sm:flex-col sm:items-start">
          <img
            src={photoURL}
            alt=""
            class="h-12 w-12 rounded-full"
          />

          <div class="ml-4 sm:ml-0 sm:mt-4">
            <p class="text-sm font-medium text-gray-900">{displayName}</p>
            <div class="mt-2 flex items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceReviews;
