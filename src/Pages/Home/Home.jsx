import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import ContactPage from "../../Components/ContactPage/ContactPage";
import Services from "../../Components/Services/Services";
import Testimonial from "../../Components/Testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Social Events</title>
      </Helmet>
      <Banner></Banner>
      <Services></Services>
      <Testimonial></Testimonial>
      <ContactPage></ContactPage>
    </div>
  )
}
