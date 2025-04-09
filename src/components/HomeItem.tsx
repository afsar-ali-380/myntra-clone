import { useDispatch } from "react-redux";
import { BagItem, HomeItemPropType } from "../types/types";
import { bagActions } from "../store/bagSlice";
import DelayLoader from "./layouts/DelayLoader";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HomeItem: React.FC<HomeItemPropType> = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isloading, setIsLoading] = useState<Boolean>(false);

  const handleAddToBag = (item: BagItem) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/bag");
    }, 1000);
    dispatch(bagActions.addToBag(item));
  };

  return (
    <>
      {isloading && <DelayLoader />}
      <div className="min-w-[225px] max-w-[250px] bg-white p-1 border-[#ccc] shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-200">
        <img
          className="w-full h-[300px] object-cover object-center"
          src={item.image}
          alt={item.item_name}
        />
        <div className="p-3">
          <div className="text-sm text-gray-600 flex items-center gap-1 mb-1">
            <span className="font-medium text-yellow-500">
              {item?.rating?.stars} ⭐
            </span>
            <span>|</span>
            <span>{item?.rating?.count}</span>
          </div>

          <h3 className="text-sm font-semibold text-gray-800 mb-1">
            {item.company}
          </h3>

          <p className="text-sm text-gray-700 truncate mb-2">
            {item.item_name}
          </p>

          <div className="flex items-center gap-2 text-sm mb-3">
            <span className="font-semibold text-gray-900">
              ₹{item.current_price}
            </span>
            <span className="line-through text-red-500">
              ₹{item.original_price}
            </span>
            <span className="text-green-600 font-medium">
              {item.discount_percentage}% OFF
            </span>
          </div>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-md transition-colors duration-200 uppercase font-semibold cursor-pointer"
            onClick={() => handleAddToBag(item)}
          >
            Add to Bag
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeItem;
