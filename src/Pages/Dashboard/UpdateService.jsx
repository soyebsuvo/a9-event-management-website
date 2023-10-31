import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function UpdateService() {
    const navigate = useNavigate()
    const params = useParams();
    const { data } = useQuery({
        queryKey: ['service'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/service/${params.id}`);
            return await res.data;                
        }
    })
    const handleUpdate = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const price = e.target.price.value;
        const desc = e.target.desc.value;
        const updatedService = {
            service_name : name ,
            imageURL:  photo , 
            price , 
            details : desc
        }
        console.log(updatedService)
        axios.put(`http://localhost:5000/service/${params.id}` , updatedService)
        .then(res => {
            console.log(res.data)
            if(res.data.acknowledged){
                Swal.fire('Done', 'Successfully Added Service!', 'success')
                navigate('/dashboard/manage-service');
            }
        })
    }
    return (
        <div>
            <div className="px-3 md:px-10 py-8">
                <div>
                    <h2 className="text-4xl font-bold text-center">Update <span className="text-[#FCB41E]">Service</span></h2>
                    <hr className="border-2 border-[#FCB41E] w-32 mx-auto my-3" />
                </div>
                <div>
                    <div className="py-8">
                        <form onSubmit={handleUpdate}>
                            <div className="md:flex gap-4">
                                <input defaultValue={data?.service_name} className="w-full py-4 border-2 rounded-lg px-2 my-2" type="text" name="name" id="name" placeholder="Service Name*" />
                                <input defaultValue={data?.imageURL} className="w-full py-4 border-2 rounded-lg px-2 my-2" type="text" name="photo" id="photo" placeholder="Photo URL*" />
                                <input defaultValue={data?.price} className="py-4 border-2 rounded-lg px-2 my-2" type="text" name="price" id="price" placeholder="Price*" />
                            </div>
                            <div className="">
                                <div>
                                    <textarea defaultValue={data?.details} className="w-full py-4 border-2 rounded-lg px-2 my-2 resize-none" name="desc" id="desc" cols="30" rows="5" placeholder="Short Description"></textarea>
                                </div>

                            </div>

                            <div>
                                <input className="btn btn-block bg-[#EF1D26] text-white hover:bg-transparent hover:border hover:border-red-700 hover:text-[#EF1D26]" type="submit" value="Update Product" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
