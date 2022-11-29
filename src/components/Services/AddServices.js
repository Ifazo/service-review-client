import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";

const AddServices = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { displayName, email } = user;

  const handleServices = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.img.value;
    const price = form.price.value;
    const description = form.description.value;
    const service = {
      displayName,
      email,
      name,
      img,
      price,
      description,
    };
    console.log(service);

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Product Added Successfully");
          form.reset();
        }
      });
  };

  return (
    <>
      <h2 className="text-xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        Add a Services
      </h2>
      <form onSubmit={handleServices}>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Service Name
            </label>
            <input
              name="name"
              type="text"
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput1"
              placeholder="Service Name"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Service Image URL
            </label>
            <input
              name="img"
              type="text"
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput2"
              placeholder="Image URL"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput4"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Price
            </label>
            <input
              name="price"
              type="text"
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput4"
              placeholder="Service Price"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput6"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Description
            </label>
            <input
              name="description"
              type="text"
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput6"
              placeholder="Description"
            />
          </div>
        </div>
        <input className="btn btn-accent w-20" type="submit" value="Submit" />
      </form>
    </>
  );
};

export default AddServices;
