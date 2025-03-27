import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { TeamCardType } from "../types/TeamCartType";

const TeamCard: React.FC<TeamCardType> = ({ img, facebook, twitter, instagram, name, job }) => {
  return (
    <div className="relative w-64 rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-300">
      <div className="relative w-full h-80 overflow-hidden">
        <img 
          src={img} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center">
          <img 
            src={img} 
            alt={name} 
            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
          />
          <div className="flex space-x-6 relative z-10">
            <a 
              href={facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white text-3xl transform transition-transform duration-300 hover:scale-125 hover:text-blue-500"
            >
              <FaFacebook />
            </a>
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white text-3xl transform transition-transform duration-300 hover:scale-125 hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a 
              href={instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white text-3xl transform transition-transform duration-300 hover:scale-125 hover:text-pink-500"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center py-4 bg-white">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{job}</p>
      </div>
    </div>
  );
};

export default TeamCard;