import { useState } from "react";
import { ProductsData } from "../Products/ProductsData";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [cartItems, setCartItems] = useState(
    ProductsData.map((item) => ({ ...item, quantity: 1 }))
  );

  const navigate = useNavigate();

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleConfirmOrder = () => {
    if (cartItems.length === 0) {
      alert("Cart is empty. Please add some items before confirming order.");
      return;
    }
    navigate("/addresspayment", { state: { cartItems } });
  };

  return (
    <div className="pt-28 pb-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Orders</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-4 border rounded-xl p-4 mb-6 shadow-md bg-white dark:bg-gray-800"
            >
              <img
                src={item.imgs[0]}
                alt={item.title}
                className="w-full sm:w-40 h-40 object-cover rounded"
              />

              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                <p className="text-sm text-gray-500">{item.address}</p>
                <p className="text-primary font-bold">₹{item.price}</p>
                <p>⭐ {item.rating} Rating</p>

                <div className="flex items-center gap-4 mt-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    <FaMinus />
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    <FaPlus />
                  </button>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-auto p-2 text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Confirm Order Button */}
          <div className="text-center mt-8">
            <button
              onClick={handleConfirmOrder}
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
            >
              Confirm Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Order;
