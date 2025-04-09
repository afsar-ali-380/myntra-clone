import { useSelector } from "react-redux";
import { RootStateType } from "../../store/index";

const BagSummary = () => {
  const bagItems = useSelector((store: RootStateType) => store.bag);
  const totalMRP = bagItems.reduce(
    (acc, item) => acc + (item?.original_price ?? 0),
    0
  );
  const totalDiscount = bagItems.reduce(
    (acc, item) =>
      acc + ((item?.original_price ?? 0) - (item?.current_price ?? 0)),
    0
  );
  const convenienceFee = bagItems.length > 0 ? 99 : 0;
  const totalAmount = totalMRP - totalDiscount + convenienceFee;

  return (
    <>
      <div className="md:w-1/3 w-full bg-white p-4 rounded-xl shadow h-fit">
        <h2 className="text-xl font-semibold mb-4">
          Price Details ({bagItems.length} Item
          {bagItems.length > 1 ? "s" : ""})
        </h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Total MRP</span>
            <span>₹{totalMRP}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount on MRP</span>
            <span>-₹{totalDiscount}</span>
          </div>
          <div className="flex justify-between">
            <span>Convenience Fee</span>
            <span>₹{convenienceFee}</span>
          </div>
          <hr />
          <div className="flex justify-between font-semibold text-base">
            <span>Total Amount</span>
            <span>₹{totalAmount}</span>
          </div>
        </div>
        <button className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-medium">
          PLACE ORDER
        </button>
      </div>
    </>
  );
};

export default BagSummary;
