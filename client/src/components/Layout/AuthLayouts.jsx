import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-sm rounded-lg bg-slate-200">
        <h1 className="text-3xl mb-2 m-5 font-poppins font-semibold text-[#2461DE]">
          {title}
        </h1>
        <p className="font-medium text-slate-500 m-5 mb-9">
          Welcome👋, please enter your details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-black mt-5 m-10 text-sm text-center">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="relative text-blue-700 font-poppins font-semibold hover:text-sky-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-sky-600 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-sky-600 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
        >
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-black mt-5 m-2 text-sm text-center">
        Already have an account?{" "}
        <Link
          to="/login"
          className="relative text-blue-700 font-poppins font-semibold hover:text-sky-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-sky-600 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-sky-600 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
        >
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
