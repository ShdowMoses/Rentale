import { Link } from "react-router-dom";
import Button from "../Button/Index";

const NavbarComponent = (props) => {
  const { navColor, navText } = props;
  return (
    <nav className="relative overflow-hidden">
      <div
        className={`max-w-7xl mx-auto flex ${navColor} items-center py-4 px-10 relative`}
      >
        {/* Logo aligned to the left */}
        <div className="flex-1">
          <Link
            to="/"
            className={`${navText} font-poppins font-bold text-3xl hover:text-gray-300 transition-colors`}
          >
            Rentale
          </Link>
        </div>
        {/* Navigation links centered */}
        <ul
          className={`flex-1 flex items-center justify-center space-x-16 my-4 ${navText} text-base font-roboto font-semibold`}
        >
          <li>
            <Link to="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300 transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:text-gray-300 transition-colors"
            >
              Our Cars
            </Link>
          </li>
        </ul>

        <div className="flex-1 w-full">
          <Button variant="border-2 border-[#2461DE] hover:bg-[#2461DE] hover:text-white text-sm h-12 ml-64">
            <Link to="/login">Rent a car</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
