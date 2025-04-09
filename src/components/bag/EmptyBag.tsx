import { useNavigate } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";

const EmptyBag: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      <BiShoppingBag className="w-16 h-16 text-gray-400 mb-4" />
      <h2 className="text-2xl font-semibold text-gray-700">
        Your Bag is Empty
      </h2>
      <p className="text-gray-500 mt-2 max-w-md">
        Looks like you haven’t added anything to your bag yet. Start exploring
        and add your favorite items!
      </p>
      <button
        className="mt-6 px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-full transition-all cursor-pointer"
        onClick={() => navigate("/")}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default EmptyBag;
