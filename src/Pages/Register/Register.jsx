/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

export default function Register() {
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
        console.log(name, email, password);
        createUser(email , password)
        .then(result => {
            console.log(result.user);
            navigate("/");
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div className="flex justify-center py-8">
            <div className="shadow-lg bg-base-200 p-5 w-96 mx-auto text-center">
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="">
                        <h2 className="text-2xl font-semibold py-3">Create a new account</h2>

                        <div className="flex justify-center gap-6 items-center py-4">
                            <button className="px-4 py-2 rounded-lg"><FcGoogle className='text-3xl'></FcGoogle></button>
                            <button className=" px-4 py-2 rounded-lg"><FaGithub className='text-3xl '></FaGithub></button>
                        </div>
                    </div>
                    <div className="divider">OR</div>
                    <div className="">
                        <form onSubmit={handleRegister}>
                            <input className="outline-none border-b-2 block bg-base-200 border-gray-300 py-4 w-full" type="text" name="name" id="name" placeholder="Full Name" required />
                            <input className="outline-none border-b-2 block bg-base-200 border-gray-300 py-4 w-full" type="email" name="email" id="email" placeholder="Email Address" required />
                            <input className="outline-none border-b-2 block bg-base-200 border-gray-300 py-4 w-full" type="password" name="password" id="password" placeholder="Password" required />
                            <div className="mt-4">
                                <button className="btn w-full bg-[#FCB41E] text-white hover:text-[#FCB41E] border hover:border-[#FCB41E] hover:bg-transparent font-bold">Register</button>
                            </div>
                            <p className="mt-2">Already have an accout? <Link to="/login" className="text-blue-700 font-bold">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
