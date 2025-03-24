import React from "react";
import { ProductItemType } from "../types/ProductItemType";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineEye } from "react-icons/ai";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

const ProductItem: React.FC<ProductItemType> = ({ image, name, price }) => {
  return (
    <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 p-4">
      <div className="relative w-full overflow-hidden rounded-xl cursor-pointer group-hover:scale-95 transition-transform duration-300">
        <img className="w-full h-72 object-cover rounded-xl" src={image} alt="product image" />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="p-3 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105 cursor-pointer">
          <AiOutlineHeart className="w-6 h-6 text-gray-700" />
        </button>
        <button className="p-3 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105 cursor-pointer">
          <AiOutlineShoppingCart className="w-6 h-6 text-gray-700" />
        </button>
        <button className="p-3 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105 cursor-pointer">
          <AiOutlineEye className="w-6 h-6 text-gray-700" />
        </button>
        <button className="p-3 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105 cursor-pointer">
          <HiOutlineSwitchHorizontal className="w-6 h-6 text-gray-700" />
        </button>
      </div>
      
      <div className="text-center mt-5">
        <h5 className="text-xl font-semibold text-gray-900">{name}</h5>
        <span className="text-2xl font-bold text-gray-900">{price}.00$</span>
      </div>
    </div>
  );
};

export default ProductItem;