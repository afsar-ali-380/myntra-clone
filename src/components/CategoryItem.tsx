import { Link } from "react-router-dom";
import { CategoryItemPropType } from "../types/types";

const CategoryItem: React.FC<CategoryItemPropType> = ({ item }) => {
  return (
    <Link to={item.path} className="min-w-[225px]">
      <img
        className="w-full h-auto object-cover"
        src={item.img}
        alt="category-img"
      />
    </Link>
  );
};

export default CategoryItem;
