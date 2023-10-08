import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import SingleTestimonial from "./SingleTestimonial";
export default function Testimonial() {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch("testimonial.json")
            .then(res => res.json())
            .then(data => setTestimonials(data));
    }, [])
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div className="py-6 pb-16 px-8 rounded-lg text-center hidden md:block">
            <div data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="700"
                data-aos-anchor-placement="top-bottom">
                <h2 className="text-4xl font-bold text-center">Testimonials</h2>
                <div>
                    <hr className="border-t-4 border-[#FCB41E] w-32 mt-1 mx-auto" />
                </div>
                <p className="text-center mt-4 text-gray-500">What people say</p>
            </div>
            <Slider {...settings}>
                {
                    testimonials?.map(testimonial => <SingleTestimonial key={testimonial.id} testimonial={testimonial}></SingleTestimonial>)
                }
            </Slider>
        </div>
    )
}
