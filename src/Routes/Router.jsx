import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Components/Services/Services";

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
                element : <ServiceDetails></ServiceDetails>
            },
            {
                path : "/services/service/:id",
                element : <ServiceDetails></ServiceDetails>
            }
        ]
    }
])

export default router;