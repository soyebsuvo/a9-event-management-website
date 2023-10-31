// import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async";
import { useLoaderData, useLocation } from "react-router-dom";

export default function ServiceDetails() {
  const service = useLoaderData();
  // const [services, setServices] = useState([]);
  // useEffect(() => {
  //   fetch("/services.json")
  //     .then(res => res.json())
  //     .then(data => setServices(data))
  // }, [])
  // const params = useParams();
  // const service = services?.find(service => service.id == params.id);
  const location = useLocation();
  console.log(location)
  return (
    <div className=" px-2 md:px-24 py-16">
      <Helmet>
        <title>Social Events | Servie Details</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="">
          <div className="relative">
          <img src={service?.imageURL} className="w-full rounded-lg" />
          <div className="absolute bottom-0 w-full">
            <h2 className="py-4 text-2xl bg-gray-600 bg-opacity-60 text-[#FCB41E] font-extrabold px-6">Package Cost ${service?.price}</h2>
          </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
            <h1 className="text-3xl md:text-5xl font-bold py-5">{service?.service_name}</h1>
            <button className="btn px-3 hover:text-[#FCB41E] hover:border-[#FCB41E] hover:bg-transparent py-1 md:px-8 md:py-3 border-2 border-[#FCB41E] bg-[#FCB41E] text-white mr-2">Purchase</button>
            </div>
            <p className="">{service?.details}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
