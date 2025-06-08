import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { ProductsData } from "./ProductsData";

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const colors = {
    backgroundLight: "#00CAFF",
    cardBackground: "#AFDDFF",
    textPrimary: "#ea580c",
    textSecondary: "#78350f",
    starColor: "#facc15",
    buttonGradient:
      "linear-gradient(to right,rgb(70, 86, 229), rgb(59, 196, 246))", // purple to yellow
    buttonHoverGradient:
      "linear-gradient(to right,rgb(200, 130, 68),rgb(122, 91, 68))", // orange gradient on hover
    buttonText: "#ffffff",
    shadow: "rgba(0, 0, 0, 0.1)",
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2
        className="text-4xl font-extrabold mb-10 text-center"
        style={{ color: colors.textPrimary }}
      >
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {ProductsData.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="cursor-pointer rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transform transition duration-300"
            style={{
              backgroundColor: colors.cardBackground,
              boxShadow: `0 4px 6px ${colors.shadow}`,
            }}
          >
            <img
              src={product.imgs[0]}
              alt={product.title}
              className="w-full h-56 object-cover rounded-md mb-5 shadow-md"
            />

            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: colors.textPrimary }}
            >
              {product.title}
            </h3>

            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, idx) => (
                <FaStar
                  key={idx}
                  style={{
                    color: colors.starColor,
                    opacity: idx < product.rating ? 1 : 0.3,
                  }}
                />
              ))}
            </div>

            <p
              className="text-sm line-clamp-3 mb-4"
              style={{ color: colors.textSecondary }}
            >
              {product.description}
            </p>

            <p
              className="text-lg font-bold mb-4"
              style={{ color: colors.textPrimary }}
            >
              ₹{product.price.toFixed(2)}
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                alert(`Ordered: ₹${product.title}`);
              }}
              style={{
                backgroundImage: colors.buttonGradient,
                color: colors.buttonText,
                padding: "0.5rem 1.25rem",
                borderRadius: "9999px",
                fontWeight: 600,
                transition: "all 0.3s ease",
                border: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundImage =
                  colors.buttonHoverGradient)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundImage =
                  colors.buttonGradient)
              }
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
