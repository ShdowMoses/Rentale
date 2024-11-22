import { useState } from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useAuth } from "../hooks/AuthProvider";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const auth = useAuth();

  const handleSubmitEvent = async (e) => {
    e.preventDefault();

    if (!input.email || !input.password) {
      alert("Email dan password harus diisi");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.email)) {
      alert("Format email tidak valid");
      return;
    }

    if (input.password.length < 6) {
      alert("Password minimal 6 karakter");
      return;
    }

    try {
      await auth.loginAction(input);
    } catch (error) {
      console.log("Login error:", error);
      alert("Gagal login: " + error.message);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmitEvent} className="m-5">
        <InputForm
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          name="email"
          onChange={handleInput}
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="******"
          name="password"
          onChange={handleInput}
        />
        <Button
          variant="bg-[#2461DE] w-full text-white font-poppins font-medium"
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
