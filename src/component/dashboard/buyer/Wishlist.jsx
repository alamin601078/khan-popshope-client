import { useEffect, useState } from "react";
import { axiosPublic } from "../../../hocks/useAxiosPublic";
import useAuth from "../../../hocks/useAuth";


const Wishlist = () => {
    const [wishlist,setWishlist] = useState([]);
    const { user } = useAuth();
    const email = user.email
    console.log(wishlist,'dsjf')
    useEffect(() =>{
        const fetch = async () => {
         axiosPublic.get(`/wishlist/${email}`)
         .then(res =>{
            //  console.log(res.data)
            setWishlist(res.data)
         
         })
        }
     fetch();
     },[email])
    return (
        <div>
            <div className="flex justify-center items-center"><p className="text-6xl font-bold">MY WISHLIST</p></div>
            <div>
                {
                wishlist.length > 0  ? ( <>
                            <div className="grid col-span-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
            {
                wishlist.map((p) => <prod key={p.id}>
                    <div className="card bg-base-100 w-96 shadow-xl">
                      <figure className="px-10 pt-10">
                        <img
                          src={p.image}
                          alt="Shoes"
                          className="rounded-xl object-cover w-full" />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title">Category : {p.category}</h2>
                        <p>Title : {p.title}</p>
                        <p>Brand : {p.brand}</p>
                        <p>Price : {p.price}</p>
                        <p>Stock : {p.stock}</p>
                        <div className="card-actions">
                          <button className="btn btn-primary" >Wishlist</button>
                          <button className="btn btn-primary">Buy Now</button>
                        </div>
                      </div>
                    </div>
                </prod>)
            }
        </div>
                    </>)
                :(
                    <div>
                    <p>No products is your wishlist</p>
                    </div>
                  )
                }
            </div>
        </div>
    );
};

export default Wishlist;