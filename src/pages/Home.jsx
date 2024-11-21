import Contact from "../component/home/Contact";
import Faq from "../component/home/Faq";
import FeaturedProducts from "../component/home/FeaturedProducts";
import HeroSection from "../component/home/HeroSection";
import Testimonial from "../component/home/Testimonial";


const Home = () => {
    return (
        <div>
            <HeroSection/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
                <FeaturedProducts/>
                <FeaturedProducts/>
                <FeaturedProducts/>
                <FeaturedProducts/>
                <FeaturedProducts/>
            </div>
            <Testimonial/>
            <Faq/>
            <Contact/>
        </div>
    );
};

export default Home;