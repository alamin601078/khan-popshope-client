import { useEffect, useState } from "react";
import { axiosPublic } from "../../hocks/useAxiosPublic";


const ProductCad = () => {
    const [product, setProduct]= useState([])
    useEffect(() =>{
    
        axiosPublic.get(`/product`)
        .then(res =>{
            // console.log(res.data)
            setProduct(res.data)
        })
    })
    // console.log(product)

    return (
        <div className="grid grid-flow-col lg:grid-cols-12">
            <div className="grid col-span-2">
                Brand
            </div>
            <div className="grid col-span-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
            {
                product.map((p) => <prod key={p.id}>
                    <div className="card bg-base-100 w-96 shadow-xl">
                      <figure className="px-10 pt-10">
                        <img
                          src={p.image}
                          alt="Shoes"
                          className="rounded-xl" />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title">Category : {p.category}</h2>
                        <p>Name : {p.name}</p>
                        <p>Price : {p.price}</p>
                        <p>Slot : {p.slot}</p>
                        <div className="card-actions">
                          <button className="btn btn-primary">Wishlist</button>
                          <button className="btn btn-primary">Buy Now</button>
                        </div>
                      </div>
                    </div>
                </prod>)
            }
        </div>

        </div>
    );
};

export default ProductCad;