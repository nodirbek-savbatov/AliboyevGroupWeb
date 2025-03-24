import React from "react";

const categories = [
    { title: "Web site", items: 56, img: "/public/images/img21.png" },
    { title: "Graphic design", items: 36, img: "/public/images/img22.png" },
    { title: "Web design", items: 21, img: "/public/images/img23.png" },
    { title: "Android app", items: 18, img: "/public/images/img24.png" },
    { title: "Desktop app", items: 36, img: "/public/images/img25.png" },
  ];

export default function CategoryImages() {
  return (
    <div className="p-6 flex items-center justify-center mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {categories.map((category, index) => (
          <div
            key={index}
            className="cursor-grab relative bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img src={category.img} alt={category.title} className="w-full h-56 object-cover opacity-80" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white text-2xl font-bold">{category.title}</h3>
              <p className="text-gray-300 text-lg">({category.items} items)</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
