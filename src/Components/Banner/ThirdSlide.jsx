
export default function ThirdSlide() {
    return (
        <div className="hero h-[400px] md:h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/sjPnXK8/Depositphotos-11340870-original.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content md:px-12">
                <div className=" px-12">
                    <h2 className="text-2xl md:text-5xl py-6"><span className="text-[#FCB41E] font-bold">Let Us help</span> <br /> you<br />Create</h2>
                    <h2 className="text-sm md:text-md w-1/2 mx-auto">Planing a Wedding, Proposal or Event in our busy city in not so easy. And it takes skills ( and time ) to make it all look easy-going</h2>
                    <button className="px-3 mt-4 rounded-full py-1 font-bold bg-[#FCB41E] text-whitmr-2">Online Request</button>
                </div>
            </div>
        </div>
    )
}
