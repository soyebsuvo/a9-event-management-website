import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
export default function Service({ service }) {
    const { id, service_name, details, imageURL } = service;
    return (
        <div className='border border-[#FCB41E] rounded-2xl' data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="900"
            data-aos-anchor-placement="top-bottom">
            <div className="card bg-base-100 shadow-xl relative space-y-4">
                <figure><img className='h-[200px] w-full' src={imageURL} alt="Shoes" /></figure>
                <div className="px-2 py-1">
                    <h2 className="card-title mb-3">{service_name}</h2>
                    {/* <p className='mb-12'>{details.length > 100 ?  : details}</p> */}
                    {
                        details.length > 100 ? <p className='mb-10 text-gray-500'>{details.slice(0, 100)}...</p> :
                            <p className='mb-10 text-gray-500'>{details}</p>
                    }
                    <div className="card-actions justify-end absolute -bottom-4 left-28">
                        <Link to={`service/${id}`}><button className="px-3 py-1 rounded-full bg-[#FCB41E] text-white flex items-center gap-3"><span>Details</span><FaLongArrowAltRight></FaLongArrowAltRight></button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
Service.propTypes = {
    service: PropTypes.object.isRequired
}