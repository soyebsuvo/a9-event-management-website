/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
export default function Login() {
    const navigate = useNavigate()
    const { login, googleSignIn, githubSignIn } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);
        login(email, password)
            .then(res => {
                console.log(res.user);
                navigate("/")
            })
            .catch(err => {
                console.error(err);
            })
    }
    const otherSignIn = media => {
        media()
            .then((res) => {
                console.log(res.user);
                navigate("/")
            })
            .catch()
    }
    return (
        <div className="flex justify-center py-8">
            <div className="shadow-lg bg-base-200 p-5 w-96 mx-auto">
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="grid card rounded-box place-items-center">
                        <h2 className="text-2xl font-semibold py-3">Login to your account</h2>
                        <p>Don't have an accout? <Link to="/register" className="text-blue-700 font-bold">Sign Up</Link></p>
                        <div className="flex justify-center gap-6 items-center py-4">
                            <button onClick={() => otherSignIn(googleSignIn)} className="px-4 py-2 rounded-lg"><FcGoogle className='text-3xl'></FcGoogle></button>
                            <button onClick={() => otherSignIn(githubSignIn)} className=" px-4 py-2 rounded-lg"><FaGithub className='text-3xl'></FaGithub></button>
                        </div>
                    </div>
                    <div className="divider">OR</div>
                    <div className="grid card rounded-box place-items-center">
                        <form onSubmit={handleLogin}>
                            <input className="outline-none border-b-2 block bg-base-200 border-gray-300 py-4 w-full" type="email" name="email" id="email" placeholder="Email Address" required />
                            <input className="outline-none border-b-2 block bg-base-200 border-gray-300 py-4 w-full" type="password" name="password" id="password" placeholder="Password" required />
                            <div className="flex justify-between items-center gap-8 py-4">
                                <div className="flex gap-2 items-center">
                                    <input className="text-sm" type="checkbox" name="remember" id="remember" /><span className="text-sm">Remember Me</span>
                                </div>
                                <p className="text-sm text-blue-700 font-bold cursor-pointer">Forgotten Password?</p>
                            </div>
                            <div>
                                <button className="btn w-full bg-[#FCB41E] text-white hover:text-[#FCB41E] border hover:border-[#FCB41E] hover:bg-transparent font-bold">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
