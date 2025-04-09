import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { SiAdguard } from "react-icons/si";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { assets } from "../../assets/assets";
import {
  customerPolicies,
  onlineShopping,
  usefulLinks,
} from "../../constant/footer";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 px-6 py-10 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold mb-3">ONLINE SHOPPING</h3>
          <ul className="space-y-1">
            {onlineShopping.map((item) => (
              <li key={item}>
                <Link to="/" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="font-bold mt-6 mb-2">USEFUL LINKS</h4>
          <ul className="space-y-1">
            {usefulLinks.map((item) => (
              <li key={item}>
                <Link to="/" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">CUSTOMER POLICIES</h3>
          <ul className="space-y-1">
            {customerPolicies.map((item) => (
              <li key={item}>
                <Link to="/" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">EXPERIENCE MYNTRA APP ON MOBILE</h3>
          <div className="flex gap-3 mb-4">
            <img
              src={assets.google_play_store}
              alt="Google Play"
              className="h-10"
            />
            <img
              src={assets.apple_app_store}
              alt="App Store"
              className="h-10"
            />
          </div>
          <h3 className="font-bold mb-2">KEEP IN TOUCH</h3>
          <div className="flex gap-4 text-xl">
            <Link to="#">
              <FaFacebookF />
            </Link>
            <Link to="#">
              <FaTwitter />
            </Link>
            <Link to="#">
              <FaYoutube />
            </Link>
            <Link to="#">
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <SiAdguard className="text-[40px]" />
            <p>
              <strong>100% ORIGINAL</strong> guarantee for all products at
              myntra.com
            </p>
          </div>
          <div className="flex items-start gap-3">
            <MdOutlineShoppingCartCheckout className="text-[38px]" />

            <p>
              <strong>Return within 14days</strong> of receiving your order
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 text-xs text-gray-500 py-4 border-t mt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
          <p>
            In case of any concern,
            <Link
              to="/contact"
              className="text-blue-600 font-semibold hover:underline"
            >
              Contact Us
            </Link>
          </p>
          <p>© 2025 www.myntra.com. All rights reserved.</p>
          <p className="text-sm">A Flipkart company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
