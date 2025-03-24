import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const TopBar = () => {
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("UZ");

  return (
    <div className="w-full bg-gradient-to-r from-blue-700 to-purple-700 text-white py-2 text-sm">
      <div className="wrapper container mx-auto flex justify-between items-center px-6 py-4">
        {/* Ishonch telefoni */}
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-lg text-white opacity-80" />
          <span>
            Ishonch telefoni:{" "}
            <a href="tel:+998933590705" className="hover:underline font-semibold">
              +(998) 93 359-07-05
            </a>
          </span>
        </div>

        {/* O'rta matn */}
        <div className="hidden md:flex text-white font-semibold">
          Wellcome To <span className="ml-1 text-yellow-300">Aliboyev Group</span>
        </div>

        {/* Currency va Language tanlash */}
        <div className="flex items-center gap-6">
          {/* Currency */}
          <div className="relative">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent text-white font-semibold outline-none cursor-pointer border-b border-transparent hover:border-white transition-all"
            >
              <option value="USD" className="text-black">USD 🇺🇸</option>
              <option value="EUR" className="text-black">EUR 🇪🇺</option>
              <option value="UZS" className="text-black">UZS 🇺🇿</option>
            </select>
          </div>

          {/* Language */}
          <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-white font-semibold outline-none cursor-pointer border-b border-transparent hover:border-white transition-all"
            >
              <option value="UZ" className="text-black">UZ 🇺🇿</option>
              <option value="EN" className="text-black">EN 🇬🇧</option>
              <option value="RU" className="text-black">RU 🇷🇺</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
