import AuthLayouts from "../components/Layout/AuthLayouts";
import LoginForm from "../components/Fragments/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login" type="login">
      <LoginForm />
      
    </AuthLayouts>
  );
};

export default LoginPage;
