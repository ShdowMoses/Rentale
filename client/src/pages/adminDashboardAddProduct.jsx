import { Link } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import AddProduct from "../components/Dashboard/CreateProduct";

const DashboardProductsAdd = () => {
  return (
    <>
      {" "}
      <nav className="relative overflow-hidden shadow-md">
        <div
          className={`max-w-7xl mx-auto flex items-center py-4 px-10 relative`}
        >
          {/* Logo aligned to the left */}
          <div className="flex-1">
            <Link
              to="/dashboard"
              className="font-poppins font-bold text-2xl hover:text-gray-300 transition-colors"
            >
              RentaleAtmin
            </Link>
          </div>
          {/* Navigation links centered */}
        </div>
      </nav>
      <div className="flex h-screen">
        <Sidebar />
        <AddProduct />
      </div>
    </>
  );
};

export default DashboardProductsAdd;
