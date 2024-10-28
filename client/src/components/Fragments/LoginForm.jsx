import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input";

const LoginForm = () => {
  return (
    <div>
      <form action="" className="m-5">
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
        <Button variant="bg-blue-600 w-full text-white font-poppins font-medium">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
