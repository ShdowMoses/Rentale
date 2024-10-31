import Button from "../Elements/Button/index.jsx";

const Brand = (props) => {
  const { brand } = props;
  return (
    <h1 className="text-2xl font-semibold mt-10 mb-6">{brand}</h1>
  );
};

// Card
const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="flex justify-start">
      <div className="w-full max-w-xs bg-white border rounded-lg shadow-md">
        {children}
      </div>
    </div>
  );
};

const Header = (props) => {
  const { image, alt } = props;
  return (
    <img
      src={image}
      alt={alt}
      className="rounded-t-lg object-cover w-96 h-48"
    />
  );
};

const Body = (props) => {
  const { name, price } = props;
  return (
    <div className="px-4 pb-4 pt-4">
      <a href="">
        <h5 className="text-xl font-semibold text-black tracking-tight">
          {name}
        </h5>
        <p className="mt-1 text-sm">{price}/hari</p>
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex justify-center">
      <Button variant="bg-[#14274E] text-white text-sm mt-10 mb-10 w-28">
        Detail
      </Button>
    </div>
  );
};

CardProduct.Brand = Brand

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
