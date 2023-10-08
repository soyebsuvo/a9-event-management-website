import { useEffect, useState } from "react"
import Service from "./Service";

export default function Services() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="py-4">
            <div data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="900"
            data-aos-anchor-placement="top-bottom">
                <h2 className="text-4xl font-bold text-center">Services</h2>
                <div>
                    <hr className="border-t-4 border-[#FCB41E] w-32 mt-1 mx-auto" />
                </div>
                <p className="text-center mt-4 text-gray-500">We are the best</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-12">
                {
                    services?.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    )
}
