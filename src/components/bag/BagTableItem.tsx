import { useDispatch } from "react-redux";
import { BagTableItemPropType } from "../../types/types";
import { bagActions } from "../../store/bagSlice";

const BagTableItem: React.FC<BagTableItemPropType> = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (id: string) => {
    dispatch(bagActions.removeFromBag(id));
  };

  return (
    <tr key={item.id} className="border-b hover:bg-gray-100">
      <td className="p-2">
        <img
          src={item.image}
          alt={item.item_name}
          className="w-16 h-16 object-cover"
        />
      </td>
      <td className="p-2">{item.item_name}</td>
      <td className="p-2">
        ₹{item.current_price}{" "}
        <span className="line-through text-gray-400 text-xs ml-1">
          ₹{item.original_price}
        </span>
      </td>
      <td className="p-2 text-green-600">By {item.delivery_date}</td>
      <td className="p-2">
        <button
          className="text-red-500 hover:underline"
          onClick={() => handleRemoveItem(item.id)}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default BagTableItem;
