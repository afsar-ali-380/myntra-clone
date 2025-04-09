import Header from "../components/layouts/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/layouts/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
