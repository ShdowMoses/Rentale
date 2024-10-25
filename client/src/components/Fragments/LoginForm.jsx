import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input";

const LoginForm = () => {
  return (
    <form action="">
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
      <Button variant="bg-blue-600 w-full text-white font-poppins font-medium">Login</Button>
    </form>
  );
};

export default LoginForm;
