import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { Provider } from "@/components/ui/provider";
import "./index.css";
// import "bulma/css/bulma.css";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/register.jsx";
import LoginPage from "./pages/login.jsx";
import ProductPage from "./pages/products.jsx";
import LandingPage from "./pages/landingPage.jsx";
import DashboardPage from "./pages/adminDashboard.jsx";
import DashboardProduct from "./pages/adminDashboardProduct.jsx";
import DashboardUsers from "./pages/adminDashboardUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "*",
    element: <h1 className="text-center text-9xl my-48">Not Found</h1>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/dashboard/products",
    element: <DashboardProduct />,
  },
  {
    path: "/dashboard/users",
    element: <DashboardUsers />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider> */}
    <RouterProvider router={router} />
    {/* </Provider> */}
  </StrictMode>
);
