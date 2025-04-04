import { Link } from "react-router-dom";


const Carousel = () => {
    return (
        <div className="relative w-full flex gap-4 py-6 overflow-x-auto h-44">
            <Link to="product"> <img className="h-24 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?2" alt="Image 2" /></Link>
            <Link to="product"> <img className="h-24 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?2" alt="Image 2" /></Link>
            <Link to="product"> <img className="h-24 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?2" alt="Image 2" /></Link>
            <Link to="product"> <img className="h-24 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?2" alt="Image 2" /></Link>
            <Link to="product"> <img className="h-24 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?2" alt="Image 2" /></Link>
            <Link to="product"> <img className="h-24 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?2" alt="Image 2" /></Link>
       
    </div>
    );
};

export default Carousel;