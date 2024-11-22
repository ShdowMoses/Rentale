// import { useState } from "react";
// import Button from "../Elements/Button/index.jsx";
// import InputForm from "../Elements/Input";

// const LoginForm = () => {
//   const [input, setInput] = useState({
//     email: "",
//     password: "",
//   });

//   const handleSubmitEvent = (e) => {
//     e.preventDefault();
//     if (input.email !== "" && input.password !== "") {
//     }
//     alert("Please provide a valid input!");
//   };

//   const handleInput = (e) => {
//     const { email, value } = e.target;
//     setInput((prev) => ({
//       ...prev,
//       [email]: value,
//     }));
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmitEvent} className="m-5">
//         <InputForm
//           label="Email"
//           type="email"
//           placeholder="example@gmail.com"
//           name="email"
//           onChange={handleInput}
//         />
//         <InputForm
//           label="Password"
//           type="password"
//           placeholder="******"
//           name="password"
//           onChange={handleInput}
//         />
//         <Button
//           variant="bg-[#2461DE] w-full text-white font-poppins font-medium"
//           type="submit"
//         >
//           Login
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
