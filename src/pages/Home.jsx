import Contact from "../component/home/Contact";
import Faq from "../component/home/Faq";
import HeroSection from "../component/home/HeroSection";
import Testimonial from "../component/home/Testimonial";


const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Testimonial/>
            <Faq/>
            <Contact/>
        </div>
    );
};

export default Home;