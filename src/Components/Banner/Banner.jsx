// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';
import ThirdSlide from './ThirdSlide';

export default function Banner() {
    return (


        <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <FirstSlide></FirstSlide>
            </SwiperSlide>
            <SwiperSlide>
                <SecondSlide></SecondSlide>
            </SwiperSlide>
            <SwiperSlide>
                <ThirdSlide></ThirdSlide>
            </SwiperSlide>
        </Swiper>



    )
}
