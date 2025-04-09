import BagTable from "./BagTable";
import BagSummary from "./BagSummary";

const Bag = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row p-6 gap-6 w-full min-h-screen/2 bg-gray-50">
        <BagTable />
        <BagSummary />
      </div>
    </>
  );
};

export default Bag;
