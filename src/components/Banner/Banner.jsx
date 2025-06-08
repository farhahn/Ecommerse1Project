
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const features = [
  {
    icon: <GrSecure />,
    text: "Quality Products",
    bg: "bg-violet-100 dark:bg-violet-400",
  },
  {
    icon: <IoFastFood />,
    text: "Fast Delivery",
    bg: "bg-orange-100 dark:bg-orange-400",
  },
  {
    icon: <GiFoodTruck />,
    text: "Easy Payment Method",
    bg: "bg-green-100 dark:bg-green-400",
  },
  {
    icon: <GiFoodTruck />,
    text: "Get Offers",
    bg: "bg-yellow-100 dark:bg-yellow-400",
  },
];

const Banner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animation only once
    threshold: 0.2, // 20% visible = trigger
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div
      ref={ref}
      className="min-h-[550px] flex justify-center items-center py-16 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900"
    >
      <motion.div
        className="container px-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {},
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <motion.div variants={fadeUp}>
            <img
              src={BannerImg}
              alt="Banner"
              className="max-w-[420px] h-[400px] w-full mx-auto rounded-2xl shadow-2xl object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {},
            }}
            className="flex flex-col justify-center gap-6 text-center sm:text-left"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight"
            >
              ☀️ Summer Collection <br /> <span className="text-violet-600">Up to 50% Off</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base text-gray-600 dark:text-gray-300 tracking-wide leading-relaxed max-w-md mx-auto sm:mx-0"
            >
              Discover fresh summer styles with unbeatable prices. Fast delivery,
              secure shopping, and great deals await!
            </motion.p>

            <div className="flex flex-col gap-4">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="flex items-center gap-4 group cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <div
                    className={`text-3xl h-12 w-12 shadow p-3 rounded-full ${item.bg} text-white group-hover:rotate-12 transition-transform`}
                  >
                    {item.icon}
                  </div>
                  <p className="text-gray-800 dark:text-gray-100 font-medium group-hover:text-violet-600 transition-colors duration-300">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl shadow-lg transition duration-300"
              >
                Shop Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
