import  { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { ProductsData } from "./ProductsData";
import Navbar from "../Navbar/Navbar"; // Adjust path as needed

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const product = ProductsData.find((p) => p.id === Number(id));
  const [mainImg, setMainImg] = useState(product?.imgs[0]);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container p-8 text-center pt-28">
          <h1 className="text-3xl font-bold mb-4 text-blue-900">Product Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-blue-300 hover:bg-blue-400 text-white py-2 px-6 rounded"
          >
            Back to Home
          </button>
        </div>
      </>
    );
  }

  const recommended = ProductsData.filter((p) => p.id !== product.id);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8 pt-28">
        {/* Main Product Content */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Images */}
          <div className="md:w-1/2">
            <img
              src={mainImg}
              alt={product.title}
              className="w-full rounded-lg shadow-lg mb-4 object-cover max-h-[400px]"
            />
            <div className="flex gap-4">
              {product.imgs.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.title} ${idx + 1}`}
                  className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                    mainImg === img ? "border-blue-600" : "border-transparent"
                  }`}
                  onClick={() => setMainImg(img)}
                />
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="md:w-1/2 text-blue-500">
            <h1 className="text-4xl font-extrabold mb-4">{product.title}</h1>
            <div className="flex items-center gap-1 mb-3 text-blue-600">
              {[...Array(5)].map((_, idx) => (
                <FaStar
                  key={idx}
                  className={idx < product.rating ? "opacity-100" : "opacity-30"}
                />
              ))}
            </div>
            <p className="mb-6 text-lg text-gray-700">{product.description}</p>
            <p className="font-bold text-3xl mb-6 text-blue-500">₹{product.price.toFixed(2)}</p>
            <p className="mb-4 text-gray-600">
              <span className="font-semibold text-blue-700">Available at: </span>
              {product.address}
            </p>
            <div className="flex gap-4 mb-10">
              <button
                onClick={() => alert(`Added ₹${product.title} to cart.`)}
                className="bg-blue-600 hover:bg-blue-400 text-white py-3 px-6 rounded-full font-semibold transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => alert(`Buying ₹${product.title} now.`)}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 px-6 rounded-full font-semibold transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Recommended Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {recommended.map((p) => (
              <div
                key={p.id}
                onClick={() => navigate(`/product/${p.id}`)}
                className="cursor-pointer bg-blue-50 rounded-lg shadow-md p-5 hover:shadow-xl hover:scale-105 transform transition duration-300"
              >
                <img
                  src={p.imgs[0]}
                  alt={p.title}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <h3 className="text-lg font-semibold text-blue-800 mb-1">{p.title}</h3>
                <div className="flex items-center gap-1 text-blue-500 mb-2">
                  {[...Array(5)].map((_, idx) => (
                    <FaStar
                      key={idx}
                      className={idx < p.rating ? "opacity-100" : "opacity-30"}
                    />
                  ))}
                </div>
                <p className="text-blue-900 text-sm line-clamp-3 mb-2">{p.description}</p>
                <p className="font-bold text-blue-700">₹{p.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
