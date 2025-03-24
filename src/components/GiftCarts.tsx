import React from 'react';

interface GiftCartsProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  linkText?: string;
  linkHref?: string;
}

const GiftCarts: React.FC<GiftCartsProps> = ({ icon, title, text, linkText, linkHref }) => {
  return (
    <div className="w-full sm:w-50 md:w-60 lg:w-[20rem] min-h-[200px] p-6 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col justify-between">
      <div>
        <div className="w-7 h-7 text-gray-500 mb-3">
          {icon}
        </div>
        <a href="#">
          <h5 className="mb-2 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 text-sm sm:text-base">
          {text}
        </p>
      </div>
      {linkText && linkHref && (
        <a href={linkHref} className="inline-flex font-medium items-center text-blue-600 hover:underline mt-auto">
          {linkText}
          <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
          </svg>
        </a>
      )}
    </div>
  );
};

export default GiftCarts;