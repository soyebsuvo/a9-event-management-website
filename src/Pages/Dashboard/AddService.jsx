
export default function AddService() {
    const handleAddService = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const price = e.target.price.value;
        const desc = e.target.desc.value;
    }
  return (
    <div>
      <div className="px-3 md:px-10 py-8">
            <div>
                <h2 className="text-4xl font-bold text-center">Add <span className="text-[#FCB41E]">Service</span></h2>
                <hr className="border-2 border-[#FCB41E] w-32 mx-auto my-3" />
            </div>
            <div>
                <div className="py-8">
                    <form onSubmit={handleAddService}>
                        <div className="md:flex gap-4">
                            <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="text" name="name" id="name" placeholder="Service Name*" />
                            <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="text" name="photo" id="photo" placeholder="Photo URL*" />
                            <input className="py-4 border-2 rounded-lg px-2 my-2" type="text" name="price" id="price" placeholder="Price*" />
                        </div>
                        <div className="">
                        <div>
                            <textarea className="w-full py-4 border-2 rounded-lg px-2 my-2 resize-none" name="desc" id="desc" cols="30" rows="5" placeholder="Short Description"></textarea>
                        </div>
                            
                        </div>
                        
                        <div>
                            <input className="btn btn-block bg-[#EF1D26] text-white hover:bg-transparent hover:border hover:border-red-700 hover:text-[#EF1D26]" type="submit" value="Add Product" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
