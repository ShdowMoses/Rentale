import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="mx-10 my-10">
      <h1 className="text-2xl font-semibold mb-6">BMW</h1>
      <div className="flex flex-wrap gap-10">
        <CardProduct>
          <CardProduct.Header
            image="images/beemwe.jpg"
            alt="BMW M4 Competition"
          />
          <CardProduct.Body title="BMW M4 Compe" price="Rp.3.500.000" />
          <CardProduct.Footer />
        </CardProduct>

        <CardProduct>
          <CardProduct.Header image="images/e46.jpg" alt="BMW E46" />
          <CardProduct.Body title="BMW E46" price="Rp.2.100.000" />
          <CardProduct.Footer />
        </CardProduct>

        <CardProduct>
          <CardProduct.Header
            image="images/bemwem.jpg"
            alt="BMW M3 Competition"
          />
          <CardProduct.Body title="BMW M3 Competition" price="Rp.3.200.000" />
          <CardProduct.Footer />
        </CardProduct>
      </div>
      <h1 className="mb-6 mt-10">Ferrari</h1>
      <div className="flex flex-wrap gap-10">
        <CardProduct>
          <CardProduct.Header
            image="images/feraru.jpg"
            alt="Ferrari Michael Schumacher"
          />
          <CardProduct.Body
            title="Ferrari Michael Schumacher"
            price="Rp.350.000.000"
          />
          <CardProduct.Footer />
        </CardProduct>
      </div>
    </div>
  );
};

export default ProductPage;
