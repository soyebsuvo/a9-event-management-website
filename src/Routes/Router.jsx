import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Components/Services/Services";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About/About";
import Location from "../Pages/Location/Location";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddService from "../Pages/Dashboard/AddService";
import ManageServices from "../Pages/Dashboard/ManageServices";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import UpdateService from "../Pages/Dashboard/UpdateService";
import AddTestimonial from "../Pages/Dashboard/AddTestimonial";
import ManageTestimonial from "../Pages/Dashboard/ManageTestimonial";

const router = createBrowserRouter([
    {
        path: "/",
        element : <Root></Root>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/services",
                element : <Services></Services>
            },
            {
                path : "/service/:id",
                element : <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader : ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path : "/services/service/:id",
                element : <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/register",
                element : <Register></Register>
            },
            {
                path : "/staff",
                element : <PrivateRoute><About></About></PrivateRoute>
            },
            {
                path : "/location",
                element : <PrivateRoute><Location></Location></PrivateRoute>
            }
        ]
    },

    {
        path : "/dashboard" ,
        element : <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children : [
            {
                path : "/dashboard",
                element : <PrivateRoute><DashboardHome></DashboardHome></PrivateRoute>
            },
            {
                path : "/dashboard/add-service",
                element : <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path : "/dashboard/manage-service",
                element : <PrivateRoute><ManageServices></ManageServices></PrivateRoute>
            },
            {
                path : '/dashboard/manage-service/update-service/:id',
                element : <PrivateRoute><UpdateService></UpdateService></PrivateRoute>
            },
            {
                path : '/dashboard/add-testimonial',
                element : <PrivateRoute><AddTestimonial></AddTestimonial></PrivateRoute>
            },
            {
                path : '/dashboard/manage-testimonial',
                element : <PrivateRoute><ManageTestimonial></ManageTestimonial></PrivateRoute>
            },
        ]
    }
])

export default router;