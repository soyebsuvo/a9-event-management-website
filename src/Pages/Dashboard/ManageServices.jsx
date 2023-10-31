import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import ManageService from "./ManageService";

export default function ManageServices() {
    const { data : services, isLoading , error , isError , refetch} = useQuery({
        queryKey: ["services"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/services`);
            return await res.data
        }
    })
    // console.log(data)

    if(isLoading){
        <h2 className="text-4xl">Loading...</h2>
    }
    if(isError){
        console.log(error.message)
    }
    return (
        <div>
            <h2 className="p-2 font-bold m-2 text-3xl">Manage Services</h2>
            <div>
                {
                    services?.map(service => <ManageService key={service._id} service={service}></ManageService>)
                }
            </div>
        </div>
    )
}
