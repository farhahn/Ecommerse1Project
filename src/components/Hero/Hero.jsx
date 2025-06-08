import React, { useRef } from "react";
import PropTypes from "prop-types";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Upgrade your wardrobe with stylish essentials for every occasion. Shop now and save big on men's fashion!",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "From casual to classy, find outfits that express your unique style. Unwrap exclusive deals this season.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "It’s the biggest sale of the year! Grab up to 70% off across our entire store – limited time only!",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false, // custom arrows below
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true, // ✅ autoplay enabled
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    focusOnSelect: false,
  };

  return (
    <section
      className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-blue-50 dark:bg-teal-900 dark:text-white duration-200 flex justify-center items-center"
      aria-label="Hero Banner"
    >
      {/* Background decorative pattern */}
      <div
        className="h-[700px] w-[700px] bg-gradient-to-tr from-teal-400 to-blue-600 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-8"
        aria-hidden="true"
      ></div>

      {/* Custom Arrows */}
      <div className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="bg-sky-400 hover:bg-sky-500 text-white p-3 rounded-full shadow-lg transition"
          aria-label="Previous Slide"
        >
          &#8592;
        </button>
      </div>
      <div className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2">
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="bg-sky-400 hover:bg-sky-500 text-white p-3 rounded-full shadow-lg transition"
          aria-label="Next Slide"
        >
          &#8594;
        </button>
      </div>

      {/* Container for slider */}
      <div className="container max-w-7xl px-6 sm:px-8 pb-8 sm:pb-0">
        <Slider ref={sliderRef} {...settings}>
          {ImageList.map(({ id, img, title, description }) => (
            <div key={id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div
                  className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  <h1
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold text-blue-900 dark:text-teal-200"
                    data-aos="zoom-out"
                    data-aos-duration="700"
                    data-aos-once="true"
                  >
                    {title}
                  </h1>
                  <p className="text-sm max-w-md mx-auto sm:mx-0 text-blue-700 dark:text-teal-100">
                    {description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="300"
                    className="mt-4"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-blue-500 to-teal-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform text-white py-2 px-6 rounded-full shadow-lg"
                      aria-label="Order Now"
                    >
                      Order Now
                    </button>
                  </div>
                </div>

                {/* Image Content */}
                <div className="order-1 sm:order-2 flex justify-center">
                  <img
                    src={img}
                    alt={`Hero banner image for ${title}`}
                    className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] object-contain sm:scale-105 lg:scale-110 mx-auto"
                    data-aos="zoom-in"
                    data-aos-once="true"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

Hero.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};

export default Hero;
