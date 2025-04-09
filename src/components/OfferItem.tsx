import { Link } from "react-router-dom";
import { OfferItemPropType } from "../types/types";

const OfferItem: React.FC<OfferItemPropType> = ({ item }) => {
  return (
    <Link to={item.path} className="min-w-[250px]">
      <img
        className="w-full h-auto object-cover"
        src={item.img}
        alt="offer-img"
      />
    </Link>
  );
};

export default OfferItem;
