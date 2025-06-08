import { useState, useEffect } from "react";
import { Routes, Route,  } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import FeaturedProducts from "./components/Products/FeaturedProducts";
import ProductDetails from "./components/Products/ProductDetails";
import Order from "./components/Order/Order";
import AddressPayment from "./components/Order/AddressPayment";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 min-h-screen flex flex-col">
      {/* Navbar hamesha dikh raha hai */}
      <Navbar handleOrderPopup={handleOrderPopup} />

      {/* Main content */}
      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero handleOrderPopup={handleOrderPopup} />
                <FeaturedProducts />
                <TopProducts handleOrderPopup={handleOrderPopup} />
                <Banner />
                <Subscribe />
                <Products />
                <Testimonials />
              </>
            }
          />
          <Route path="/order" element={<Order />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addresspayment" element={<AddressPayment />} />
        </Routes>
      </div>

      {/* Footer hamesha dikh raha hai */}
      <Footer />

      {/* Popup global */}
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
