import { useSelector } from "react-redux";
import Content from "../components/Content";
import HomeItem from "../components/HomeItem";
import { RootStateType } from "../store";

const Home = () => {
  const items = useSelector((store: RootStateType) => store.items);
  return (
    <>
      <Content />
      <div className="max-h-[5em] ml-[70px] text-[1.8em] text-[#3e4152] uppercase tracking-[.13rem] font-[500]">
        Trending Picks
      </div>
      <div className="mx-[60px] my-[30px] flex flex-row gap-1 overflow-x-auto py-4 px-2">
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
