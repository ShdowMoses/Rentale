import { Link } from "react-router-dom";
import Button from "../Elements/Button";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "BEEMWE",
      product_description: "lorem ipsum dolor sit amet",
      price: "Rp2.500.000",
      license_plate: "BK 000 XYZ",
      brand: "BMW",
      status: "Available",
    },
    {
      id: 2,
      name: "SUPRA",
      product_description: "lorem ipsum dolor sit amet",
      price: "Rp3.500.000",
      license_plate: "BK 89 HQ",
      brand: "Toyota",
      status: "Available",
    },
  ];

  return (
    <div className="w-screen p-5">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-bold text-3xl  ml-10 mt-5">List of Products</h1>
        <Button variant="bg-[#2461DE] text-white text-sm mt-5 h-12">
          <Link to={"/dashboard/product/add"}>Add Product</Link>
        </Button>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr className="text-left">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Id
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Product Name
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Product Description
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      License Plate
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Brand
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {products.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {user.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {user.product_description}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {user.price}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {user.license_plate}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {user.brand}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`inline-flex rounded-full px-2 text-xs font-semibold ${
                            user.status === "Available"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex space-x-1">
                          {" "}
                          <Button variant="text-white bg-indigo-600 mr-2">
                            Update
                          </Button>
                          <Button variant="text-white bg-red-600  ">
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
