import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosPublic } from "../../hocks/useAxiosPublic";


const Carousel = () => {
        const [product, setProduct]= useState([])
        useEffect(() =>{
           const fetch = async () => {
            axiosPublic.get(`/product`)
            .then(res =>{
                // console.log(res.data)
                setProduct(res.data.result)
            })
           }
        fetch();
        },[])
        console.log(product)
    return (
        <div className=" carousel carousel-center rounded-box  space-x-4 p-4 mt-6 bg-white" >
            {
                product.map((p) => (
                    <Link  className="carousel-item" to={`/product/${p._id}`} key={p._id}>
                        <img className="h-24 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={p.image} alt={p.title} />
                    </Link>
                ))
            }
            {/* <Link to="product/:id"> <img className="h-24 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?2" alt="Image 2" /></Link> */}
            {/* <Link to="product"> <img className="h-24 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?2" alt="Image 2" /></Link>
            <Link to="product"> <img className="h-24 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?2" alt="Image 2" /></Link>
            <Link to="product"> <img className="h-24 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?2" alt="Image 2" /></Link>
            <Link to="product"> <img className="h-24 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?2" alt="Image 2" /></Link>
            <Link to="product"> <img className="h-24 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?2" alt="Image 2" /></Link> */}
       
    </div>
    );
};

export default Carousel;