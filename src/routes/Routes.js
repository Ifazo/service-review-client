import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Main from "../Outlet/Main";
import Blogs from "../components/Blogs/Blogs";
import MyReviews from "../components/Reviews/MyReviews";
import AddServices from "../components/Services/AddServices";
import Services from "../components/Services/Services";

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
               path: "/services",
               element: <Services></Services>
           },
           {
                path: "/blogs",
                element: <Blogs></Blogs>,
           },
           {
                path: "/reviews",
                element: <MyReviews></MyReviews>
           },
           {
                path: "/addservice",
                element: <AddServices></AddServices>
           }
        ]
    }
])