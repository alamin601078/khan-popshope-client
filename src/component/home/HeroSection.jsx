import useAuth from "../../hocks/useAuth";


const HeroSection = () => {
    const { user } = useAuth();
    console.log(user)
    return (
<div
  className="hero min-h-fit:  bg-center bg-[length:1300px_250px] bg-no-repeat object-cover"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/GRywgj0/5972189-21621.jpg)",
  backgroundSize: "cover",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{user?.displayName} <br /> WellCome <br /> KHAN POPSHPE</h1>
      <button className="btn btn-primary"><a href="product">SHOW PRODUCT</a></button>
    </div>
  </div>
</div>
    );
};

export default HeroSection;