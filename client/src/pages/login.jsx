import AuthLayouts from "../components/Layout/AuthLayouts";
import Login from "../components/Auth/LoginForm";
// import LoginForm from "../components/Fragments/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login" type="login">
      <Login />
    </AuthLayouts>
  );
};

export default LoginPage;
