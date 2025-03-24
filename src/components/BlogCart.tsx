import React from "react";
import { BlogCardType } from "../types/BlogType";

type DateFormat = {
  day: string;
  month: string;
  year: string;
};

const formatDate = (dateString: string): DateFormat => {
  const [day, month, year] = dateString.split(".");
  const monthNames = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ];
  return { day, month: monthNames[parseInt(month) - 1], year };
};

const BlogCard: React.FC<BlogCardType> = ({ date, text, title, user, image }) => {
  const { day, month } = formatDate(date);

  return (
    <div className="max-w-md mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
      <div className="relative">
        <img className="w-full h-56 object-cover" src={image} alt={title} />
        <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg">
          <p className="text-lg font-bold">{day}</p>
          <p className="text-sm uppercase">{month}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-500 text-sm font-medium">Post by: <span className="text-gray-700 font-semibold">{user}</span></p>
        <h2 className="text-xl font-extrabold text-gray-900 mt-3 tracking-tight hover:text-indigo-600 cursor-pointer transition duration-300">
          {title}
        </h2>
        <p className="text-gray-600 text-md mt-4 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
