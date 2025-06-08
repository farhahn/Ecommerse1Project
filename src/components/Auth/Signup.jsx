import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Signup logic here
    navigate("/login");
  };

  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center bg-white text-black px-4">
      {/* Cross Icon */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 right-6 text-2xl text-gray-600 hover:text-sky-600 transition"
      >
        <RxCross2 />
      </button>

      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg transition-all duration-300">
        <h2 className="text-3xl font-bold mb-6 text-center text-sky-600">
          Create your account
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-sky-500 to-sky-700 text-white py-3 rounded hover:from-sky-600 hover:to-sky-800 transition-all duration-300 font-semibold"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-sky-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
