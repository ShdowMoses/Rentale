const Button = (props) => {
  const { children, variant, onClick = () => {}, type = "button" } = props;
  return (
    <button
      className={`h-10 font-semibold rounded-md ${variant} px-6`}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
