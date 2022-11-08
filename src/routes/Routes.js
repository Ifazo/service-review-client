import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Main from "../outlet/Main";
import Blogs from "../components/Pages/Blogs";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
           },
           {
                path: "/blogs",
                element: <Blogs></Blogs>,
           }
        ]
    }
])