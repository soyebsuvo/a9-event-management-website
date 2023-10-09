import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

export default function About() {
    return (
        <div className='py-6'>
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="700"
                data-aos-anchor-placement="top-bottom">
                <h2 className="text-4xl font-bold text-center">Our Staff</h2>
                <div>
                    <hr className="border-t-4 border-[#FCB41E] w-32 mt-1 mx-auto" />
                </div>
                <p className="text-center mt-4 text-gray-500">MEET OUR BEST TEAM</p>
            </div>
            {/* main */}
            <div className='py-3 flex flex-col md:flex-row justify-evenly'>
                <div  data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="900"
            data-aos-anchor-placement="top-bottom">
                    <div className='flex justify-center items-center pb-4'>
                        <img className='w-64 rounded-full' src="https://i.ibb.co/1076cNP/team-1-600x600.jpg" alt="" />
                    </div>
                    <h2 className="text-2xl text-center pb-4">JESSICA MANN</h2>
                    <p></p>
                    <div className='flex gap-3 justify-center'>
                        <div className='border rounded-full p-2'>
                            <BsFacebook className='text-2xl text-black bg-transparent'></BsFacebook>
                        </div>
                        <div className='border rounded-full p-2'>
                        <BsInstagram className='text-2xl text-black bg-transparent'></BsInstagram>
                        </div>
                        <div className='border rounded-full p-2'>
                        <BsTwitter className='text-2xl text-black bg-transparent'></BsTwitter>
                        </div>
                    </div>
                </div>


                <div data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="900"
            data-aos-anchor-placement="top-bottom">
                    <div className='flex justify-center items-center pb-4'>
                        <img className='w-64 rounded-full' src="https://i.ibb.co/93y0Wxn/team-2-600x600.jpg" alt="" />
                    </div>
                    <h2 className="text-2xl text-center pb-4">BETTY BASS</h2>
                    <p></p>
                    <div className='flex gap-3 justify-center'>
                        <div className='border rounded-full p-2'>
                            <BsFacebook className='text-2xl text-black bg-transparent'></BsFacebook>
                        </div>
                        <div className='border rounded-full p-2'>
                        <BsInstagram className='text-2xl text-black bg-transparent'></BsInstagram>
                        </div>
                        <div className='border rounded-full p-2'>
                        <BsTwitter className='text-2xl text-black bg-transparent'></BsTwitter>
                        </div>
                    </div>
                </div>


                <div data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="900"
            data-aos-anchor-placement="top-bottom">
                    <div className='flex justify-center items-center pb-4'>
                        <img className='w-64 rounded-full' src="https://i.ibb.co/pw1mxZf/team-3-600x600.jpg" alt="" />
                    </div>
                    <h2 className="text-2xl text-center pb-4">SABRINA ROBERTS</h2>
                    <p></p>
                    <div className='flex gap-3 justify-center'>
                        <div className='border rounded-full p-2'>
                            <BsFacebook className='text-2xl text-black bg-transparent'></BsFacebook>
                        </div>
                        <div className='border rounded-full p-2'>
                        <BsInstagram className='text-2xl text-black bg-transparent'></BsInstagram>
                        </div>
                        <div className='border rounded-full p-2'>
                        <BsTwitter className='text-2xl text-black bg-transparent'></BsTwitter>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
