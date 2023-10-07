import moment from "moment";

export default function FirstSlide() {
    return (
        <div className="hero h-[400px] md:h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/9HhVmmH/Depositphotos-1713895.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center md:text-left text-neutral-content md:px-12" data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="900"
                data-aos-anchor-placement="top-bottom">
                <div className="px-12">
                    <h2 className="text-3xl md:text-5xl text-[#FCB41E] font-pacifico font-bold">{moment().format('LL')}</h2>
                    <h2 className="text-2xl md:text-5xl py-8"><span className="font-bold text-[#FCB41E]">We Create</span> <br />You <br />Celebrate</h2>
                    <button className="btn px-3 hover:bg-transparent py-1 md:px-8 md:py-3 border-2 border-[#FCB41E] bg-[#FCB41E] text-white mr-2">Online Request</button>
                    <button className="btn bg-transparent hover:bg-transparent px-3 py-1 md:px-8 md:py-3 border-2 border-[#FCB41E] text-[#FCB41E]">Get Started</button>
                </div>
            </div>
        </div>
    )
}
