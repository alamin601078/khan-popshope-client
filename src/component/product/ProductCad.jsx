import { useEffect, useState } from "react";
import { axiosPublic } from "../../hocks/useAxiosPublic";
import { FaSearch } from "react-icons/fa";
import useAuth from "../../hocks/useAuth";
import Swal from 'sweetalert2'


const ProductCad = () => {
  const { user } = useAuth();
    const [product, setProduct]= useState([])
    const [search, setSearch]= useState("")
    const [sort, setSort]= useState('asc')
    const [category, setCategory]= useState("")
    const [brand, setBrand]= useState("")

    const [uniqueBrand , setUniqueBrand] = useState([]);
    const [uniqueCategory , setUniqueCategory] = useState([]);

    console.log(brand, category,sort,search)
    // console.log(uniqueBrand,uniqueCategory)
    
    useEffect(() =>{
       const fetch = async () => {
        axiosPublic.get(`/product?title=${search}&sort=${sort}&brand=${brand}&category=${category}`)
        .then(res =>{
            // console.log(res.data)
            setUniqueBrand(res.data.brands);
            setUniqueCategory(res.data.categories)
            setProduct(res.data.result)
        })
       }
    fetch();
    },[search,sort,category,brand])
    // console.log(product)

    const handleSearch = (e) =>{
        e.preventDefault();
        setSearch(e.target.search.value);
        e.target.search.value = "";
    }

    const handlereset = () => {
        setSearch("");
        setSort("asc");
        setCategory("");
        setBrand("");
        window.location.reload();
    }
    
    const handleWishlist = async (p)=> {
      console.log(p)
      await axiosPublic.patch(`/wishlist/add`,{
        userEmail:user.email,
        productId:p
      })
      .then(res => {
        console.log(res.data)
        if(res.data.modifiedCount){
          // refetch()
          Swal.fire({
              position: "center",
              icon: "success",
              title:"Wishlist Added successfully",
              showConfirmButton: false,
              timer: 1500
            });
      }
    })
    }


    return (
        <div className="gap-6 grid grid-flow-row lg:grid-cols-12 ">
            <div className="grid col-span-2">
                <div>
                <form className="input input-bordered flex items-center gap-2" onSubmit={handleSearch}>
              <input type="text" name="search" className="grow" placeholder="Search" />
              <button><FaSearch /></button>
            </form>
             <p className="font-bold text-xl pl-2 my-2">Prices</p>
            <select className="select select-bordered w-full max-w-xs" onChange={(e) => setSort(e.target.value)}>
                        <option value='asc' >Low to High</option>
                        <option value='dsc' >High to Low</option>
                      </select>
                      <div>
                      <p className="font-bold text-xl pl-2 my-2">Category</p>
                      <select className="select select-bordered w-full max-w-xs" onChange={(e) => setCategory(e.target.value)}>
                        <option value=''>Categort</option>
                        {
                            uniqueCategory.map((cate) => 
                                <option key={cate} >{cate}</option>
                            )
                        }
                        
                      </select>
                      <p className="font-bold text-xl pl-2 my-2">Brand</p>
                      <select className="select select-bordered w-full max-w-xs" onChange={(e) => setBrand(e.target.value)}>
                        <option value=''>brands</option>
                        {
                            uniqueBrand.map((brand)=>
                                <option key={brand} >{brand}</option>
                            )
                        }
                      </select>
                      <button className="btn  my-2 w-full" onClick={handlereset}>Reset</button>
                </div>
                </div>

            </div>
            <div className="min-h-[600px] grid col-span-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
            {
                product.map((p) => <prod key={p.id}>
                    <div className="card bg-base-100 w-96 shadow-xl">
                      <figure className="px-10 pt-10">
                        <img
                          src={p.image}
                          alt="Shoes"
                          className="rounded-xl object-cover w-full" />
                      </figure>
                      <div className="card-body items-start text-start">
                        <h2 className="card-title">Category : {p.category}</h2>
                        <p>Title : {p.title}</p>
                        <p>Brand : {p.brand}</p>
                        <p>Price : ${p.price}</p>
                        <p>Stock : {p.stock}</p>
                        <div className="card-actions">
                          <button className="btn btn-primary" onClick={() => handleWishlist(p._id)}>Wishlist</button>
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