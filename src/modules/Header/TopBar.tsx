import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const TopBar = () => {
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("UZ");
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown: any) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-700 to-purple-700 text-white py-2 text-sm">
      <div className="max-w-7
      xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-lg text-white opacity-80" />
          <span>
            Phone Number:{" "}
            <a href="tel:+998933590705" className="hover:underline font-semibold">
              +(998) 93 359-07-05
            </a>
          </span>
        </div>

        <div className="hidden md:flex text-white font-semibold">
          Welcome To <span className="ml-1 text-yellow-300">Aliboyev Group</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Currency Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("currency")}
              className="text-white font-semibold border-b border-transparent hover:border-white transition-all focus:outline-none"
            >
              {currency}
            </button>
            {activeDropdown === "currency" && (
              <div className="absolute right-0 mt-2 w-28 bg-white rounded-lg shadow-lg z-10">
                <ul className="py-2 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => { setCurrency("USD"); setActiveDropdown(null); }}>USD 🇺🇸</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => { setCurrency("EUR"); setActiveDropdown(null); }}>EUR 🇪🇺</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => { setCurrency("UZS"); setActiveDropdown(null); }}>UZS 🇺🇿</li>
                </ul>
              </div>
            )}
          </div>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("language")}
              className="text-white font-semibold border-b border-transparent hover:border-white transition-all focus:outline-none"
            >
              {language}
            </button>
            {activeDropdown === "language" && (
              <div className="absolute right-0 mt-2 w-28 bg-white rounded-lg shadow-lg z-10">
                <ul className="py-2 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => { setLanguage("UZ"); setActiveDropdown(null); }}>UZ 🇺🇿</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => { setLanguage("EN"); setActiveDropdown(null); }}>EN 🇬🇧</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => { setLanguage("RU"); setActiveDropdown(null); }}>RU 🇷🇺</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
