import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function ServiceDetails() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  const params = useParams();
  const service = services?.find(service => service.id == params.id);
  console.log(service);
  return (
    <div className="px-24 py-16">
      <div className="hero min-h-screen">
        <div className="">
          <img src={service?.imageURL} className="w-full rounded-lg" />
          <div>
            <h1 className="text-5xl font-bold">{service?.service_name}</h1>
            <p className="py-6">{service?.details}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}
