import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";

const thStyles =
  "px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider";

const tdStyles = "px-6 py-4 whitespace-nowrap";

const ProductsList = () => {
  const { deleteProduct, toggleFeaturedProducts, products } = useProductStore();

  return (
    <motion.div
      className="bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-600">
          <tr>
            <th scope="col" className={thStyles}>
              Product
            </th>
            <th scope="col" className={thStyles}>
              Price (₹)
            </th>
            <th scope="col" className={thStyles}>
              Category
            </th>
            <th scope="col" className={thStyles}>
              Featured
            </th>
            <th scope="col" className={thStyles}>
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {products.map((product) => (
            <tr key={product._id} className="hover:bg-gray-600">
              <td className={tdStyles}>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-white">
                      {product.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className={tdStyles}>
                <div className="text-sm text-gray-300">
                  {product.price.toFixed(2)}
                </div>
              </td>
              <td className={tdStyles}>
                <div className="text-sm text-gray-300">{product.category}</div>
              </td>
              <td className={tdStyles}>
                <button
                  onClick={() => toggleFeaturedProducts(product._id)}
                  className={`p-1 rounded-full ${
                    product.isFeatured
                      ? "bg-yellow-400 text-gray-900"
                      : "bg-gray-600 text-gray-300"
                  } hover:bg-yellow-600 transition-colors duration-200`}
                >
                  <Star className="w-5 h-5" />
                </button>
              </td>
              <td className={`${tdStyles} text-sm font-medium`}>
                <button
                  onClick={() => deleteProduct(product._id)}
                  className="text-red-400 hover:text-red-500"
                >
                  <Trash className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default ProductsList;
