import React from "react";

const Reviews = () => {

  return (
    <>
      <div class="flex flex-col sm:flex-row">
        <div class="mt-6 order-2 sm:mt-0 sm:ml-16">
          <h3 class="text-sm font-medium text-gray-900">
            review.name
          </h3>
          <p class="sr-only">5 out of 5 stars</p>

          <div class="mt-3 space-y-6 text-sm text-gray-600">
            <p>
                review.description
            </p>
          </div>
        </div>

        <div class="order-1 flex items-center sm:flex-col sm:items-start">
          <img
            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Mark Edwards."
            class="h-12 w-12 rounded-full"
          />

          <div class="ml-4 sm:ml-0 sm:mt-4">
            <p class="text-sm font-medium text-gray-900">others</p>
            <div class="mt-2 flex items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
