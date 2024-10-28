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

const ProductPage = () => {
  return (
    <div className="mx-10 my-10">
      <CardProduct.Brand brand="BMW" />
      <div className="flex flex-wrap gap-10">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} alt="BMW E46" />
            <CardProduct.Body name={product.name} price={product.price} />
            <CardProduct.Footer />
          </CardProduct>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
