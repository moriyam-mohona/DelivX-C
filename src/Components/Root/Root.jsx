import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen p-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
