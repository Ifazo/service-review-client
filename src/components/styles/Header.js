import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user logged out");
      })
      .then((err) => console.log(err));
  };

  return (
    <>
      <nav class="bg-white shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <div class="flex-shrink-0 flex items-center">
                <img
                  class="block lg:hidden h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
                <img
                  class="hidden lg:block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Workflow"
                />
              </div>
              <div class="hidden md:ml-6 md:flex md:space-x-8">
                <Link
                  to="/"
                  class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  {" "}
                  Home{" "}
                </Link>
                <Link
                  to="/services"
                  class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  {" "}
                  Services{" "}
                </Link>
                {
                  user?.uid ? 
                  <>
                    <Link
                  to="/reviews"
                  class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  {" "}
                  My Reviews{" "}
                </Link>
                <Link
                  to="/addservice"
                  class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  {" "}
                  Add Service{" "}
                </Link>
                  </> : <></>
                }
                <Link
                  to="/blogs"
                  class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  {" "}
                  Blogs{" "}
                </Link>
              </div>
            </div>
            <div class="flex items-center">
              <div class="flex-shrink-0">
                {user?.uid ? (
                  <>
                    <button
                      onClick={handleLogOut}
                      type="button"
                      class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <Link to="/">Log out</Link>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <Link to="/signin">Log In</Link>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div class="md:hidden" id="mobile-menu">
          <div class="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
            >
              Home
            </Link>
            <Link
              to="/services"
              class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
            >
              Services
            </Link>
            {
              user?.uid ?
              <>
                <Link
              to="/reviews"
              class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
            >
              My Reviews
            </Link>
            <Link
              to="/addservice"
              class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
            >
              Add Service
            </Link>
              </> : <></>
            }
            <Link
              to="/blogs"
              class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
            >
              Blogs
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
