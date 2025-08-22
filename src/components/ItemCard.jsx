import React from "react";

const ItemCard = ({ icon, title, text }) => {
  return (
    <div className="flex items-center p-4 bg-white shadow rounded-md w-full">
      {/* Left Icon */}
      <div className="flex-shrink-0 mr-4">
        {icon}
      </div>

      {/* Right Text */}
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">{title}</span>
        <span className="text-2xl font-semibold text-gray-900">{text}</span>
      </div>
    </div>
  );
};

export default ItemCard;
