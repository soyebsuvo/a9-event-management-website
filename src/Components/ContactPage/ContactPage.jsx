import { GoLocation } from 'react-icons/go'
import { MdOutlineViewTimeline, MdOutlineWatchLater } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
export default function ContactPage() {
    return (
        <div className='md:px-10 py-6'>
            <div data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="700"
                data-aos-anchor-placement="top-bottom">
                <h2 className="text-4xl font-bold text-center">Contact Us</h2>
                <div>
                    <hr className="border-t-4 border-[#FCB41E] w-32 mt-1 mx-auto" />
                </div>
                <p className="text-center mt-4 text-gray-500">HAPPY CLIENTS ABOUT US</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4" data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="700"
                data-aos-anchor-placement="top-bottom">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-3/5">
                    <div className='flex gap-5 p-8'>
                        <div className='text-5xl text-[#FCB41E]'>
                            <GoLocation></GoLocation>
                        </div>
                        <div className='space-y-4'>
                            <h2 className="text-2xl">Postal Address</h2>
                            <p>Unica Event Agency 85 Fentiman Ave Ottawa, ON K1S 0T7</p>
                        </div>
                    </div>
                    <div className='flex gap-5 p-8'>
                        <div className='text-5xl text-[#FCB41E]'>
                            <MdOutlineWatchLater></MdOutlineWatchLater>
                        </div>
                        <div className='space-y-4'>
                            <h2 className="text-2xl">Open Hours</h2>
                            <p>Monday - Friday 8.00 am - 5.00 pm, Weekend Closed</p>
                        </div>
                    </div>
                    <div className='flex gap-5 p-8'>
                        <div className='text-5xl text-[#FCB41E]'>
                            <BsTelephone></BsTelephone>
                        </div>
                        <div className='space-y-4'>
                            <h2 className="text-2xl">Phone & E-mail</h2>
                            <p>Phone: <span className='text-[#FCB41E] font-bold cursor-pointer hover:underline'>1-800-64-38</span><br />
                                Fax: <span className='text-[#FCB41E] font-bold cursor-pointer hover:underline'>1-800-64-39</span><br />
                                <span className='text-[#FCB41E] font-bold cursor-pointer hover:underline'>info@ancorathemes.com</span></p>
                        </div>
                    </div>
                    <div className='flex gap-5 p-8'>
                        <div className='text-5xl text-[#FCB41E]'>
                            <MdOutlineViewTimeline></MdOutlineViewTimeline>
                        </div>
                        <div className='space-y-4'>
                            <h2 className="text-2xl">Sessions</h2>
                            <p>Mornings: 8 am - 12 am, Afternoons: 1 pm - 5 pm, Full Day: 8 am - 5 pm</p>
                        </div>
                    </div>
                </div>

                <div className="md:w-2/5 py-8 px-6 box-border">
                    <form className=''>
                        <div className='flex gap-4 mb-4'>
                            <input className='px-6 py-3 bg-base-200 rounded-3xl w-full' type="text" name="name" id="name" placeholder="Name*" />
                            <input className='px-6 py-3 bg-base-200 rounded-3xl w-full' type="text" name="name" id="name" placeholder="Phone*" />
                        </div>
                        <div>
                            <textarea className='px-6 py-3 bg-base-200 rounded-3xl resize-none w-full' name="message" id="message" cols="30" rows="5" placeholder="Message*"></textarea>
                        </div>
                        <div className='flex items-center py-3'>
                            <input type="checkbox" name="check" id="check" /><span className='text-sm ml-2 font-bold'>I agree that my data is being collected and stored.</span>
                        </div>
                        <div className='flex justify-center items-center pt-3'><button onClick={e => e.preventDefault()} className='btn rounded-lg hover:text-[#FCB41E] hover:bg-transparent bg-[#FCB41E] hover:border-[#FCB41E] text-white border border-[#FCB41E] w-full'>Send</button></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
