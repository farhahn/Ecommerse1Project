import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const AddressPayment = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  // Step control: 1 = Address, 2 = Payment
  const [step, setStep] = useState(1);

  // Address form state
  const [address, setAddress] = useState({
    fullName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState("");

  // UPI selection state
  const [upiOption, setUpiOption] = useState("");

  // Handlers
  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (
      !address.fullName ||
      !address.street ||
      !address.city ||
      !address.state ||
      !address.zip ||
      !address.phone
    ) {
      alert("Please fill in all address fields.");
      return;
    }
    setStep(2);
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
    setUpiOption(""); // Reset UPI option if payment changes
  };

  const handlePayConfirm = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    if (paymentMethod === "UPI" && !upiOption) {
      alert("Please select a UPI option.");
      return;
    }
    alert("Payment successful! Thank you for your order.");
    // Yahan aap order submission backend call kar sakte hain

    // Page refresh ya redirect to home, etc.
    window.location.href = "/";
  };

  return (
    <div className="pt-28 pb-10 px-4 max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Confirm Your Order</h2>

      {/* Order Summary */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Order Summary:</h3>
        {cartItems.length === 0 ? (
          <p>No items found.</p>
        ) : (
          <ul className="space-y-2 max-h-48 overflow-y-auto">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between border-b pb-2 text-gray-700 dark:text-gray-200"
              >
                <span>
                  {item.title} x {item.quantity}
                </span>
                <span>₹{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Step 1: Address Form */}
      {step === 1 && (
        <form onSubmit={handleAddressSubmit} className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={address.fullName}
            onChange={handleAddressChange}
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="text"
            name="street"
            placeholder="Street Address"
            value={address.street}
            onChange={handleAddressChange}
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleAddressChange}
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={address.state}
            onChange={handleAddressChange}
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            value={address.zip}
            onChange={handleAddressChange}
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={address.phone}
            onChange={handleAddressChange}
            className="w-full p-3 border rounded"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full"
          >
            Continue to Payment
          </button>
        </form>
      )}

      {/* Step 2: Payment Options */}
      {step === 2 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Select Payment Method</h3>

          <div className="flex flex-col space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="Credit/Debit Card"
                checked={paymentMethod === "Credit/Debit Card"}
                onChange={handlePaymentChange}
              />
              Credit/Debit Card
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="UPI"
                checked={paymentMethod === "UPI"}
                onChange={handlePaymentChange}
              />
              UPI
            </label>

            {paymentMethod === "UPI" && (
              <div className="ml-6 mt-2 space-y-1">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="upiOption"
                    value="Google Pay"
                    checked={upiOption === "Google Pay"}
                    onChange={(e) => setUpiOption(e.target.value)}
                  />
                  Google Pay
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="upiOption"
                    value="PhonePe"
                    checked={upiOption === "PhonePe"}
                    onChange={(e) => setUpiOption(e.target.value)}
                  />
                  PhonePe
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="upiOption"
                    value="UPI ID"
                    checked={upiOption === "UPI ID"}
                    onChange={(e) => setUpiOption(e.target.value)}
                  />
                  UPI ID
                </label>

                {upiOption === "UPI ID" && (
                  <input
                    type="text"
                    placeholder="Enter your UPI ID"
                    className="mt-2 p-2 border rounded w-full"
                  />
                )}
              </div>
            )}

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="Net Banking"
                checked={paymentMethod === "Net Banking"}
                onChange={handlePaymentChange}
              />
              Net Banking
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="EMI"
                checked={paymentMethod === "EMI"}
                onChange={handlePaymentChange}
              />
              EMI
            </label>
          </div>

          <button
            onClick={handlePayConfirm}
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition mt-6 w-full"
          >
            Pay Confirm
          </button>
        </div>
      )}
    </div>
  );
};

export default AddressPayment;
