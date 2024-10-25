import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/register.jsx";
import LoginPage from "./pages/login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1 className="text-center mt-20">woi le</h1>,
  },
  {
    path: "*",
    element: <h1>ga ada kocak</h1>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
