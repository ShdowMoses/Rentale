import NavbarComponent from "../components/Elements/Navbar";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "BMW E46",
    price: "Rp.2.300.000",
    image: "/images/e46.jpg",
  },
  {
    id: 2,
    name: "BMW E46",
    price: "Rp.2.300.000",
    image: "/images/e46.jpg",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      {/* <div className="flex justify-end h-10 bg-gray-400 text-white items-center px-10">
        {email}
        <Button variant="ml-5 bg-red-600 text-sm" onClick={handleLogout}>
          Logout
        </Button> 
      </div> */}
      <NavbarComponent
        navColor="bg-transparent"
        navText="text-[#14274E]"
      ></NavbarComponent>
      <div className="mx-10 my-10">
        <CardProduct.Brand brand="BMW" />
        <div className="flex flex-wrap gap-10">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name} price={product.price} />
              <CardProduct.Footer />
            </CardProduct>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
