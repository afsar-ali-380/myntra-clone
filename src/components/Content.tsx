import Banner from "./Banner";
import Category from "./Category";
import Offers from "./Offers";

const Content = () => {
  return (
    <>
      <Banner />
      <div className="max-h-[5em] ml-[70px] text-[1.8em] text-[#3e4152] uppercase tracking-[.13rem] font-[500]">
        Medal worthy brands to Bag
      </div>
      <Offers />
      <div className="max-h-[5em] ml-[70px] text-[1.8em] text-[#3e4152] uppercase tracking-[.13rem] font-[500]">
        Shop by category
      </div>
      <Category />
    </>
  );
};

export default Content;
