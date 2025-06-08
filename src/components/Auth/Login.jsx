import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaApple, FaGoogle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const demoUser = {
    email: "demo@example.com",
    password: "123456",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    if (email === demoUser.email && password === demoUser.password) {
      toast.success("Login Successful! Redirecting...");
      setTimeout(() => {
        navigate("/");
        setIsSubmitting(false);
      }, 1500);
    } else {
      toast.error("Invalid email or password!");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center bg-white text-black px-4 transition-all duration-500">
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 right-6 text-2xl text-gray-600 hover:text-sky-600 transition"
        title="Close"
      >
        <RxCross2 />
      </button>

      <h1 className="text-3xl font-semibold mb-10 transition-all duration-300 text-sky-600">
        Login to your account
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="flex flex-col items-center w-full">
          <button className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 to-sky-700 text-white py-3 rounded-full font-semibold mb-6 hover:opacity-90 transition-all duration-300">
            Login with X
          </button>

          <div className="flex items-center w-full mb-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button className="w-full flex items-center justify-center gap-3 border border-gray-400 py-3 rounded-full font-semibold mb-4 hover:bg-sky-100 transition-all duration-300 text-sky-700">
            <FaEnvelope size={20} /> Login with Email
          </button>

          <button className="w-full flex items-center justify-center gap-3 border border-gray-400 py-3 rounded-full font-semibold mb-4 hover:bg-sky-100 transition-all duration-300 text-sky-700">
            <FaApple size={20} /> Login with Apple
          </button>

          <button className="w-full flex items-center justify-center gap-3 border border-gray-400 py-3 rounded-full font-semibold mb-4 hover:bg-sky-100 transition-all duration-300 text-sky-700">
            <FaGoogle size={20} /> Login with Google
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md w-full">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-gradient-to-r from-sky-500 to-sky-700 text-white py-3 rounded hover:from-sky-600 hover:to-sky-800 transition-all duration-300 font-semibold ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-sky-600 font-semibold hover:underline">
              Sign up
            </Link>
          </p>

          <p className="mt-4 text-center text-gray-500 text-xs">
            Demo credentials: <br />
            Email: <span className="font-semibold">demo@example.com</span> <br />
            Password: <span className="font-semibold">123456</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
