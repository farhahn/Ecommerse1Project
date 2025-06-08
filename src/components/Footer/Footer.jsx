
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={BannerImg} className="text-slate-100 bg-slate-900">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 text-blue-300">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Chlothzy
            </h1>
            <p className="text-slate-200">
              We believe fashion should be accessible, sustainable, and empowering.
              We work with trusted suppliers to ensure every product meets our standards
              for comfort, durability, and design.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold text-blue-300 sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:text-blue-400 hover:translate-x-1 duration-300 text-slate-200"
                      onClick={() => {
                        if (link.title === "Home") {
                          handleScrollTop();
                        } else {
                          window.location.href = link.link;
                        }
                      }}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold text-blue-300 sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title + "-2"}
                      className="cursor-pointer hover:text-blue-400 hover:translate-x-1 duration-300 text-slate-200"
                      onClick={() => {
                        if (link.title === "Home") {
                          handleScrollTop();
                        } else {
                          window.location.href = link.link;
                        }
                      }}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Links and Contact Info */}
            <div className="py-8 px-4">
              <div className="flex items-center gap-4 mt-6 text-blue-300">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-blue-400 transition" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-blue-400 transition" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-blue-400 transition" />
                </a>
              </div>
              <div className="mt-6 text-slate-200">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
