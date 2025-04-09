import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import Navbar from "../layouts/Navbar";
import { IoIosSearch } from "react-icons/io";
import { TfiUser } from "react-icons/tfi";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { RootStateType } from "../../store";

const Header = () => {
  const bag = useSelector((store: RootStateType) => store.bag);
  const cartItem = bag.length ?? 0;
  return (
    <>
      <div className="flex md:justify-between md:items-center h-[80px] bg-[#FFFFFF] shadow-md">
        <Link to="/" className="ml-[4%] block">
          <img
            className="h-[45px]"
            src={assets.myntra_logo}
            alt="myntra-logo"
          />
        </Link>
        <Navbar />
        <div className="h-[40px] w-[500px] flex bg-[#F5F5F6] items-center border-[#ccc] rounded-[4px]">
          <div className="p-[10px] text-[18px]">
            <IoIosSearch className="w-[19px] h-[19px] text-[#696e79]" />
          </div>
          <input
            className="grow pl-[8px] text-[14px] text-[#696e79] border-none focus:outline-none placeholder:text-[#696e79] caret-[#696e79]"
            type="text"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="h-[40px] w-[170px] mr-[4%] flex justify-between">
          <div className="flex flex-col items-center mt-1">
            <TfiUser className="text-[18px]" />
            <div className="text-[13px] font-[650] leading-5">Profile</div>
          </div>
          <div className="flex flex-col items-center mt-1">
            <IoIosHeartEmpty className="text-[18px]" />
            <div className="text-[13px] font-[650] leading-5">Wishlist</div>
          </div>
          <Link to="/bag" className="flex flex-col items-center mt-1 relative">
            <HiOutlineShoppingBag className="text-[18px]" />
            <div className="text-[13px] font-[650] leading-5">Bag</div>
            <div className="absolute left-[13px] bottom-[26px] border border-[#fafbfc] rounded-[50%] px-[3px] text-[11px] bg-pink-500 text-white">
              {cartItem}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
