import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input";

const RegisterForm = () => {
  return (
    <form action="" className="m-5">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="Enter your fullname"
        name="fullname"
      />
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
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="******"
        name="confirmPassword"
      />
      <Button variant="bg-[#2461DE] w-full text-white font-poppins font-medium">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
