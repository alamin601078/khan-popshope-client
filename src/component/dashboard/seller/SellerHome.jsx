import { useEffect, useState } from "react";
import { axiosPublic } from "../../../hocks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";


const SellerHome = () => {
    const [product, setProduct]= useState([])
    useEffect(() =>{
    
        axiosPublic.get(`/product`)
        .then(res =>{
            // console.log(res.data)
            setProduct(res.data.result)
        })
    })

    const handleDeleteProduct = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const id = user._id
                console.log(id)
                axiosPublic.delete(`/product/delete/${id}`)
                    .then(res => {
                        console.log(res)
                        if (res.data.deletedCount > 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="">
        <div className="flex justify-evenly my-4">
            <h2 className="text-3xl">All Products</h2>
            <h2 className="text-3xl">Total Products: {product.length}</h2>
        </div>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Category</th>
                        <th>Title</th>
                        <th>Brand</th>
                        <th>Prices</th>
                        <th>Status</th>
                        <th>Stock</th>
                        <th>Actions</th>
                        <th>Images</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.category}</td>
                            <td>{user.title}</td>
                            <td>{user.brand}</td>
                            <td>
                            {user.price}
                            </td>
                            <td>{user.status}</td>
                            <td>
                            {user.stock}
                            </td>
                            <td>
                            <button
                                    onClick={() => handleDeleteProduct(user)}
                                    className="btn btn-ghost btn-lg">
                                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                </button>
                            </td>
                            <td>
                            {user.image}
                            </td>
                            <td>
                            {user.sellerEmail}
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default SellerHome;