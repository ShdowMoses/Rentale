import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input";

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    //   localStorage.setItem("email", e.target.email.value);
    //   localStorage.setItem("password", e.target.password.value);
    //   window.location.href = "/products";
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="m-5">
        <InputForm
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          name="email"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="******"
          name="password"
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

export default LoginForm;
