import { offers } from "../constant/offers";
import OfferItem from "./OfferItem";

const Offers = () => {
  return (
    <>
      <div className="mx-[60px] my-[30px] flex gap-1 overflow-x-auto">
        {offers.map((item, i) => (
          <OfferItem key={i} item={item} />
        ))}
      </div>
    </>
  );
};

export default Offers;
