import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Components/Pages/AuthPages/Firebase/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }
  console.log(location.pathname);
  if (user) {
    return children;
  }
  return <Navigate to="/Login" state={location?.pathname || "/"} />;
};

export default PrivateRoute;
