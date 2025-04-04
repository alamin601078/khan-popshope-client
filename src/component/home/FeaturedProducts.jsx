import { Link } from "react-router-dom";


const FeaturedProducts = () => {
    return (
<Link to="/product">
<div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co.com/RHJVP0j/OJK9410.jpg"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">BOOK</h2>
    <p>Life of the Candle</p>
    <div className="card-actions">
      <button className="btn btn-primary">Wishlist</button>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</Link>
    );
};

export default FeaturedProducts;