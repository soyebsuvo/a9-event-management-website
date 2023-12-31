import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
export default function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const handleLogOut = () => {
        logout()
            .then(() => {
                toast.success("successfuly logged out");
            })
            .catch()
    }
    const links = <>
        <li className="text-lg"><NavLink to="/">Home</NavLink></li>
        {user && <li className="text-lg"><NavLink to="/staff">Our Staffs</NavLink></li>}
        {user && <li className="text-lg"><NavLink to="/location">Location</NavLink></li>}
        <li className="text-lg"><NavLink to="/services">Services</NavLink></li>
        {user && <li className="text-lg"><NavLink to="/dashboard">Dashboard</NavLink></li>}
        {
            user ? <li className="text-lg font-bold"><span title={user.email} className="font-extrabold logout">
                <img className="w-10 rounded-full md:ml-20" src={user.photoURL} alt="" /><span className="font-normal mr-4">{user.displayName}</span><span className="hover:underline" onClick={handleLogOut}>Log Out</span>
            </span></li> :
                <li className="text-lg font-bold"><NavLink to="/login">Login</NavLink></li>
        }
        {/* <li onClick={handleLogOut} className="text-lg font-bold"><NavLink to="/login">Login</NavLink></li> */}
    </>
    return (
        <nav className="shadow-lg bg-white">
            <div className="md:flex items-center justify-between bg-base-100 px-2 md:px-12">
                <div className="flex justify-between">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="cursor-pointer hover:decoration-neutral normal-case text-xl"><span className="text-2xl mb-1"><span className="font-bold text-[#FCB41E] text-3xl">S</span>ocial</span> <span className="text-sm mt-2">Eve<span className="underline">nts</span></span><sup className="text-[#FCB41E]">**</sup></a>
                </div>
                <div className="hidden md:flex">
                    <ul className="menu menu-horizontal items-center px-1">
                        {links}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
