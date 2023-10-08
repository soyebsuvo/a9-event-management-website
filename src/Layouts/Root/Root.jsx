import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import AOS from 'aos';
AOS.init();
import 'aos/dist/aos.css';
import Footer from '../../Pages/Footer/Footer';
import { Toaster } from 'react-hot-toast';

export default function Root() {
    return (
        <div className='max-w-7xl mx-auto font-montserrat'>
            <div className='sticky top-0 z-20'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    )
}
