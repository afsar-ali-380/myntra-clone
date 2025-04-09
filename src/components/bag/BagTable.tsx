import { useSelector } from "react-redux";
import BagTableItem from "./BagTableItem";
import { RootStateType } from "../../store/index";
import EmptyBag from "./EmptyBag";
import { useNavigate } from "react-router-dom";

const BagTable = () => {
  const bagItems = useSelector((store: RootStateType) => store.bag);
  const navigate = useNavigate();

  return (
    <div className="md:w-2/3 w-full bg-white p-4 rounded-xl shadow">
      {bagItems.length === 0 ? (
        <EmptyBag />
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4">My Bag</h2>
          <div className="w-full flex flex-col items-center">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="p-2">Item</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Delivery</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {bagItems.map((item) => (
                  <BagTableItem key={item.id} item={item} />
                ))}
              </tbody>
            </table>
            <button
              className="mt-8 mb-4 px-5 pt-1 pb-1.5 bg-pink-600 hover:bg-pink-700 text-white rounded-full transition-all cursor-pointer"
              onClick={() => navigate("/")}
            >
              Continue Shoppings
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BagTable;
