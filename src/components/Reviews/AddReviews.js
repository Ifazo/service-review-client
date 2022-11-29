import React, { useContext,  } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const AddReviews = () => {
  const review = useLoaderData()
  console.log(review);
  const { user } = useContext(AuthContext);
  console.log(user);
  const { displayName, photoURL, email } = user;

  const handleReviews = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    const review = { displayName, photoURL, email, name, description, date: new Date() };
    console.log(review);

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.acknowledged) {
          toast.success("Review Created Successfully");
        }
      });
  };

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
      <h2 className="text-xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        Add a Review
      </h2>
      <form onSubmit={handleReviews}>
        <div className="form-group mb-6">
          <input
            type="text"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput7"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleFormControlTextarea13"
            name="description"
            rows="3"
            placeholder="Review Description"
          ></textarea>
        </div>
        <button
          type="submit"
          className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default AddReviews;
