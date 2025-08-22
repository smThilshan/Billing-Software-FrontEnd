import React from "react";
import { FaDollarSign } from "react-icons/fa";

const InfoCard = ({ title, subtitle, icon }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md w-full max-w-md">
      {/* Left Text */}
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900">{title}</span>
        <span className="text-sm text-gray-500">{subtitle}</span>
      </div>

      {/* Right Icon */}
      <div className="flex-shrink-0 text-red-400">
        {icon}
      </div>
    </div>
  );
};

export default InfoCard;
