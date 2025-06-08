
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const TestimonialData = [
  {
    id: 1,
    name: "Victor John",
    text: "Chlothzy is my go-to online store! Their delivery is always on time, and the product quality is fantastic. Highly recommended.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    text: "Loved the variety and price range. The site is user-friendly, and I found what I needed in minutes.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Amit Verma",
    text: "Excellent customer service! I ordered the wrong size and their support was quick to resolve the issue.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Sarah Lee",
    text: "Nice deals and smooth checkout process. The kids wear section is adorable!",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 4,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-sky-600 font-semibold">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-sky-700">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Real voices from real people who love shopping at Chlothzy.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6 px-2">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 rounded-xl bg-sky-50 relative">
                  <div className="flex justify-center">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20 border-4 border-white shadow-md"
                    />
                  </div>

                  <div className="flex flex-col items-center text-center gap-2">
                    <p className="text-sm text-gray-700">{data.text}</p>
                    <h1 className="text-lg font-semibold text-sky-800">{data.name}</h1>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          className={`text-yellow-400 ${
                            index < data.rating ? "opacity-100" : "opacity-20"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-sky-100 text-9xl font-serif absolute top-0 right-0 select-none pointer-events-none">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
