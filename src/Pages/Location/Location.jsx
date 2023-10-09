/* eslint-disable react/no-unknown-property */

import { Helmet } from "react-helmet-async";

export default function Location() {
    return (
        <div className="md:px-24 py-12">
            <Helmet>
                <title>Social Events | Location</title>
            </Helmet>
            <div>
                <h2 className="text-4xl font-bold text-center">Location</h2>
                <div>
                    <hr className="border-t-4 border-[#FCB41E] w-32 mt-1 mx-auto" />
                </div>
                <p className="text-center mt-4 text-gray-500">See Our Main Branch</p>
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/N1sKtNr/Whats-App-Image-2023-10-09-at-16-29-13-0ee502ab.jpg" className="rounded-lg shadow-2xl w-96" />
                    <div>
                        <h1 className="text-5xl font-bold">Our Main Branch</h1>
                        <p className="py-6">Dinajpur Sadar, Dinajpur , Bangladesh</p>
                        <a target='_blank'  rel="noreferrer" href="https://www.google.com/maps/place/Dinajpur/@25.6234028,88.6052235,13z/data=!3m1!4b1!4m6!3m5!1s0x39fb529bc7fc909b:0xd8f861ed9baf24de!8m2!3d25.6221484!4d88.6437963!16s%2Fm%2F0118_182?entry=ttu" className="btn px-3 hover:bg-transparent py-1 md:px-8 md:py-3 border-2 border-[#FCB41E] bg-[#FCB41E] text-white mr-2 hover:border-[#FCB41E] hover:text-[#FCB41E]">See Location</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
