/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

export default function SingleTestimonial({ testimonial }) {
    return (
        <div className="p-4 m-4 border rounded-lg shadow-lg" data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="700"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="400">
            <p>"{testimonial?.testimonial_text}"</p>
            <div className='flex justify-center items-center py-8 gap-4'>
                <img className='w-12 rounded-full' src={testimonial?.image} alt="" />
                <h2 className="text-xl">{testimonial?.name}</h2>
            </div>
        </div>
    )
}
SingleTestimonial.propTypes = {
    testimonial: PropTypes.object
}