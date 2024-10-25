const Button = (props) => {
  const { children, variant } = props;
  return (
    <button
      className={`h-10 font-semibold rounded-md ${variant} px-6`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
