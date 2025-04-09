import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <>
      <div className="my-[40px]">
        <img src={assets.banner} alt="banner-image.jpeg" />
      </div>
    </>
  );
};

export default Banner;
