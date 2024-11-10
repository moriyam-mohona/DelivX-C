import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Routes";
import AuthProvider from "./Components/Pages/AuthPages/Firebase/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      {/* <Toaster /> */}
    </AuthProvider>
  </React.StrictMode>
);
