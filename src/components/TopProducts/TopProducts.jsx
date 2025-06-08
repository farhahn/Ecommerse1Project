import { useState } from "react";
import PropTypes from "prop-types";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Experience unmatched comfort and style with our latest casual wear collection, perfect for every day.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description:
      "Add a splash of color to your wardrobe with our vibrant printed shirts, crafted with premium fabrics.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Shirt",
    description:
      "Elegance meets comfort in our women's shirt range, designed to complement every occasion.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Discover Our Top Rated Collection
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products for You
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 max-w-lg">
            Handpicked selections crafted to bring style and comfort to your
            everyday wardrobe. Explore the finest quality products tailored just
            for you.
          </p>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-sky-400 dark:hover:bg-sky-500 hover:text-white relative shadow-xl transition-all duration-300 ease-in-out group max-w-[300px]"
            >
              {/* Wishlist Icon */}
              <button
                onClick={() => toggleWishlist(data.id)}
                className="absolute top-3 right-3 text-2xl z-10 focus:outline-none"
                aria-label="Toggle Wishlist"
              >
                {wishlist.includes(data.id) ? (
                  <AiFillHeart className="text-red-500" />
                ) : (
                  <AiOutlineHeart className="text-gray-400 hover:text-red-500 transition" />
                )}
              </button>

              {/* Image */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>

              {/* Details */}
              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1 mb-2">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>

                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>

                {/* Buttons */}
                <div className="flex justify-center items-center gap-3 mt-4">
                  <button
                    className="bg-gradient-to-r from-indigo-600 to-yellow-400 hover:from-orange-500 hover:to-yellow-300 text-white py-1 px-4 rounded-full transition-all duration-300 shadow-md"
                    onClick={handleOrderPopup}
                  >
                    Order Now
                  </button>

                  <button
                    onClick={() => toggleWishlist(data.id)}
                    aria-label="Toggle Wishlist"
                    className="text-2xl focus:outline-none text-gray-400 hover:text-red-500 transition"
                  >
                    {wishlist.includes(data.id) ? (
                      <AiFillHeart className="text-red-500" />
                    ) : (
                      <AiOutlineHeart />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
TopProducts.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};

export default TopProducts;
