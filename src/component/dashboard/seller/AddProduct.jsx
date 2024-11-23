import { useForm } from "react-hook-form";
import { axiosPublic } from "../../../hocks/useAxiosPublic";
import Swal from "sweetalert2";


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
   
    const token = localStorage.getItem("access-token")

    const onSubmit = (data) => {
      console.log("Form Data:", data);
    //   {headers:{
    //     Authorization:` ${token}`
    //   }}

      axiosPublic.post('/seller/addproduct', data , {headers:{
        Authorization:` ${token}`
      }})
      .then(res => {
          if (res.data.insertedId) {
            console.log(res.data)
              Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Add Product successfully.',
                  showConfirmButton: false,
                  timer: 1500
              });
          }
          reset()
      }) .catch(error => {
          console.log(error.message);
       })
    
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 border rounded shadow-md">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            id="title"
            {...register("title", { required: "Title is required" })}
            className="block w-full p-2 border border-gray-300 rounded"
            placeholder="Electric Bike"
          />
        </div>
  
        <div>
          <label htmlFor="brand" className="block text-sm font-medium">
            Brand
          </label>
          <input
            id="brand"
            {...register("brand", { required: "Brand is required" })}
            className="block w-full p-2 border border-gray-300 rounded"
            placeholder="E-Ride"
          />
        </div>
  
        <div>
          <label htmlFor="price" className="block text-sm font-medium">
            Price
          </label>
          <input
            id="price"
            type="number"
            {...register("price", { required: "Price is required" })}
            className="block w-full p-2 border border-gray-300 rounded"
            placeholder="1099"
          />
        </div>
  
        <div>
          <label htmlFor="stock" className="block text-sm font-medium">
            Stock
          </label>
          <input
            id="stock"
            type="number"
            {...register("stock", { required: "Stock is required" })}
            className="block w-full p-2 border border-gray-300 rounded"
            placeholder="10"
          />
        </div>
  
        <div>
          <label htmlFor="category" className="block text-sm font-medium">
            Category
          </label>
          <input
            id="category"
            {...register("category", { required: "Category is required" })}
            className="block w-full p-2 border border-gray-300 rounded"
            placeholder="Transportation"
          />
        </div>
  
        <div>
          <label htmlFor="image" className="block text-sm font-medium">
            Image URL
          </label>
          <input
            id="image"
            type="url"
            {...register("image", { required: "Image URL is required" })}
            className="block w-full p-2 border border-gray-300 rounded"
            placeholder="https://example.com/image.jpg"
          />
        </div>
  
        <div>
          <label htmlFor="sellerEmail" className="block text-sm font-medium">
            Seller Email
          </label>
          <input
            id="sellerEmail"
            type="email"
            {...register("sellerEmail", { required: "Seller Email is required" })}
            className="block w-full p-2 border border-gray-300 rounded"
            placeholder="seller@example.com"
          />
        </div>
  
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    );
};

export default AddProduct;







