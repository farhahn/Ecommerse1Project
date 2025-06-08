
import { FaPaperPlane } from "react-icons/fa";

const BannerGradient = {
  background: "linear-gradient(135deg, #0ea5e9 0%, #bae6fd 100%)",
  height: "100%",
  width: "100%",
  minHeight: "400px", // You can adjust the height as needed
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 text-white"
      style={BannerGradient}
    >
      <div className="container backdrop-blur-md py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Get Notified About New Products
          </h1>
          <p className="text-base text-white/80">
            Subscribe to receive updates on latest arrivals, exclusive offers,
            and upcoming trends—directly to your inbox!
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-2/3 p-3 rounded-full text-gray-800 bg-white focus:outline-none shadow-md"
              required
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300"
            >
              <FaPaperPlane className="text-lg" />
              Subscribe
            </button>
          </form>

          <div className="pt-4">
            <button
              className="underline text-white hover:text-[#bae6fd] transition"
              onClick={() => alert("Learn more coming soon...")}
            >
              Learn more about our products →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
