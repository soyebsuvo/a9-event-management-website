import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


export default function PrivateRoute({children}) {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading) return <div className="h-[90vh] flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    if(user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login" replace></Navigate>
}
PrivateRoute.propTypes = {
    children : PropTypes.node
}