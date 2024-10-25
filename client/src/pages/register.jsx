import AuthLayouts from "../components/Layout/AuthLayouts";
import RegisterForm from "../components/Fragments/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" type="register">
      <RegisterForm />
    </AuthLayouts>
  );
};

export default RegisterPage;
