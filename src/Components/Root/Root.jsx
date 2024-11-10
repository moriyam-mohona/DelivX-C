import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  const location = useLocation();
  console.log(location);

  const noHeaderFooter =
    location.pathname.includes("Login") || location.pathname.includes("Signup");
  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <div className="min-h-screen p-5 my-5">
        <Outlet />
      </div>

      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Root;
