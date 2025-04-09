import { categories } from "../constant/categories";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <>
      <div className="mx-[60px] my-[30px] flex overflow-x-auto">
        {categories.map((item, i) => (
          <CategoryItem key={i} item={item} />
        ))}
      </div>
    </>
  );
};

export default Category;
