import React from "react";
import { ProductItemType } from "../types/ProductItemType";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineEye } from "react-icons/ai";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

const ProductItem: React.FC<ProductItemType> = ({ image, name, price }) => {
  return (
    <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300 p-4">
      <span className="block relative w-full overflow-hidden rounded-lg">
        <img className="w-full h-64 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300" src={image} alt="product image" />
      </span>
    
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="p-3 cursor-pointer bg-white rounded-md shadow-md hover:bg-gray-200 transition-transform transform hover:scale-110">
          <AiOutlineHeart className="w-6 h-6 text-gray-700" />
        </button>
        <button className="p-3 cursor-pointer bg-white rounded-md shadow-md hover:bg-gray-200 transition-transform transform hover:scale-110">
          <AiOutlineShoppingCart className="w-6 h-6 text-gray-700" />
        </button>
        <button className="p-3 cursor-pointer bg-white rounded-md shadow-md hover:bg-gray-200 transition-transform transform hover:scale-110">
          <AiOutlineEye className="w-6 h-6 text-gray-700" />
        </button>
        <button className="p-3 cursor-pointer bg-white rounded-md shadow-md hover:bg-gray-200 transition-transform transform hover:scale-110">
          <HiOutlineSwitchHorizontal className="w-6 h-6 text-gray-700" />
        </button>
      </div>
      <div className="text-center mt-4">
        <h5 className="text-lg font-semibold text-gray-900">{name}</h5>
        <span className="text-xl font-bold text-gray-900">{price}.00$</span>
      </div>
    </div>
  );
};

export default ProductItem;