import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "../../Components/Navbar/navbar.css"
export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto">
        <nav className="">
            <Navbar></Navbar>
        </nav>
      <main className="grid lg:grid-cols-12 px-16 py-6">
        <div className="menu-section lg:col-span-2">
            <nav className="flex flex-col w-full p-4">
                <NavLink className="p-2" to="/dashboard">Home</NavLink>
                <NavLink className="p-2" to="/dashboard/add-service">Add Service</NavLink>
                <NavLink className="p-2" to="/dashboard/manage-service">Manage Service</NavLink>
            </nav>
        </div>
        <div className="main-section lg:col-span-10 border-l-2 border-[#FCB41E] my-3">
            <Outlet></Outlet>
        </div>
      </main>
    </div>
  )
}
