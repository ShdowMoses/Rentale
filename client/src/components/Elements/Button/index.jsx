const Button = (props) => {
  const { children, variant, onClick } = props;
  return (
    <button
      className={`h-10 font-semibold rounded-md ${variant} px-6`}
      type="button"
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
