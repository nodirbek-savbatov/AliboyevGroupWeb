import { FaFacebookF, FaInstagram, FaTelegramPlane, FaGoogle } from "react-icons/fa";
import FullScreenWrapper from "../../components/Wrapper";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-20">
      <FullScreenWrapper>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">CONTACT US</h3>
          <p className="text-sm">
            <strong>Address:</strong> Samarkand, Bulung‘ur, Kattakishlok MFY, Zarkurgon ko‘chasi 2 uy.
          </p>
          <p className="text-sm"><strong>Phone:</strong> (+998) 93 359 07 05</p>
          <p className="text-sm"><strong>Email:</strong> admin@aliboyevkamol.uz</p>
          <div className="flex space-x-4 mt-4 text-gray-600">
            <FaFacebookF className="text-xl cursor-pointer hover:text-gray-800" />
            <FaInstagram className="text-xl cursor-pointer hover:text-gray-800" />
            <FaTelegramPlane className="text-xl cursor-pointer hover:text-gray-800" />
            <FaGoogle className="text-xl cursor-pointer hover:text-gray-800" />
          </div>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold mb-3">INFORMATION</h3>
          <ul className="text-sm space-y-2">
            <li className="hover:underline cursor-pointer">New Products</li>
            <li className="hover:underline cursor-pointer">Our About</li>
            <li className="hover:underline cursor-pointer">Shop</li>
            <li className="hover:underline cursor-pointer">Public offer</li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h3 className="text-lg font-semibold mb-3">MY ACCOUNT</h3>
          <ul className="text-sm space-y-2">
            <li className="hover:underline cursor-pointer">My account</li>
            <li className="hover:underline cursor-pointer">Orders history</li>
            <li className="hover:underline cursor-pointer">Personal information</li>
          </ul>
        </div>
      </div>
      </FullScreenWrapper>

      {/* Copyright */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-500 text-white text-center text-sm py-4">
       <FullScreenWrapper>
       Copyright © 2019 by Aliboyev Kamol - All rights reserved
       </FullScreenWrapper>
      </div>
    </footer>
  );
};

export default Footer;
