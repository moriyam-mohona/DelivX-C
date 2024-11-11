import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import bg from "../../assets/bg.avif";
const Root = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("Login") || location.pathname.includes("Signup");
  return (
    <div>
      {noHeaderFooter || <Navbar />}

      {/* Outlet  */}
      <div className="relative min-h-screen p-5 my-5">
        <div
          className="absolute w-full h-full min-h-screen bg-cover bg-center filter blur-md opacity-80"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="relative">
          <Outlet />
        </div>
      </div>

      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Root;
