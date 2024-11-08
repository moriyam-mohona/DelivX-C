import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Pages/Home/Home/Home";
import ErrorPage from "../Components/Pages/ErrorPage/error-page";
import Login from "../Components/Pages/AuthPages/Login/Login";
import Signup from "../Components/Pages/AuthPages/SignUp/SignUp";
import Contact from "../Components/Pages/Contact/Contact";
import About from "../Components/Pages/About/About";
import Services from "../Components/Pages/Services/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Services",
        element: <Services />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/SignUp",
        element: <Signup />,
      },
    ],
  },
]);
