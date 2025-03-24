import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "../../../public/images/b-bg4.png",
  "../../../public/images/b-bg5.png"
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="max-w-6xl w-full bg-white p-4">
      
        <div className="flex flex-col md:flex-row items-center gap-6">
      
          <div className="flex-1 text-left">
            <p className="text-purple-800 font-semibold tracking-widest">
              WELCOME TO ALIBOYEV GROUP
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              ALIBOYEV GROUP
            </h1>
            <p className="mt-4 text-gray-600">
              Biz bilan hammasi juda ajoyib, bizni tanlab adashmadingiz!
            </p>
            <button className="mt-6 bg-purple-800 hover:bg-purple-900 text-white px-6 py-3 rounded-full">
              Shop Now
            </button>
          </div>

     
          <div className="flex-1 flex items-center justify-center">
            <img
              src={images[index]}
              alt="Aliboyev Group"
              className="w-full max-w-[450px] md:max-w-[500px] h-auto object-contain rounded-lg"
            />
          </div>
        </div>


        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prevImage}
            className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full"
          >
            <FaArrowLeft size={20} />
          </button>
          <span className="text-lg font-medium">
            {index + 1} / {images.length}
          </span>
          <button
            onClick={nextImage}
            className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
