import { Link } from "react-router-dom";
import { FiHome, FiUser, FiBox, FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  return (
    <>
      <aside className="bg-gray-200 h-screen px-6 py-8 flex flex-col justify-between">
        <nav className="space-y-5 bg-slate-300 w-60 rounded p-6 ">
          <p className="block text-gray-700 font-semibold text-lg  hover:text-gray-900 transition-colors duration-200">
            General
          </p>
          <Link
            to={"/"}
            className="block text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200"
          >
            <FiHome />
            Homepage
          </Link>
          <Link
            to={"/products"}
            className="block text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200"
          >
            Products
          </Link>
          <p className="block text-gray-700 font-semibold text-lg hover:text-gray-900 transition-colors duration-200">
            Admin
          </p>
          <Link
            to={"/dashboard/users"}
            className="block text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200"
          >
            <FiUser />
            User
          </Link>
          <Link
            to={"/dashboard/products"}
            className="block text-gray-700 mr-2 font-medium hover:text-gray-900 transition-colors duration-200"
          >
            <FiBox className="mr-2" />
            Products
          </Link>
          <p className="block text-gray-700 font-semibold text-lg hover:text-gray-900 transition-colors duration-200">
            Setting
          </p>
          <Link
            to={"/login"}
            className="block text-red-500 font-bold hover:text-red-700 transition-colors duration-200"
          > <FiLogOut/>
            Logout
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
