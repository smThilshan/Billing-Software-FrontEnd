import React from "react";
import SearchBar from "../components/SearchBar";
import InfoCard from "../components/InfoCard";
import { FaDollarSign } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDeleteSweep } from "react-icons/md";

const ManageUsers = () => {
  return (
    <div className="p-5 space-y-4">
      <div className="flex h-[85vh] overflow-hidden gap-4 ">
        {/* Left section (4 parts) */}
        <div className="basis-2/3 p-6 border rounded-2xl bg-gray-100">
          <div className="flex flex-col gap-4 max-w-md">
            {/* Product Name */}
            <div className="flex flex-col gap-1">
              <label className="text-base font-medium" htmlFor="product-name">
                Product Name
              </label>
              <input
                id="product-name"
                type="text"
                placeholder="Enter name"
                className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-base font-medium" htmlFor="product-email">
                Email
              </label>
              <input
                id="product-email"
                type="email"
                placeholder="Enter email"
                className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                required
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1 mb-5">
              <label
                className="text-base font-medium"
                htmlFor="product-password"
              >
                Password
              </label>
              <input
                id="product-password"
                type="password"
                placeholder="Enter password"
                className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                required
              />
            </div>
          </div>
                    <button type="button" className="w-40 py-2 active:scale-95 transition text-sm text-white rounded-full bg-indigo-500"><p className="mb-0.5">Submit</p></button>
          
        </div>


        {/* Right section (2 parts) */}
        <div className="basis-1/3 p-4 border rounded-2xl bg-gray-200">
          <SearchBar />
          <div className="h-10"></div>
          <InfoCard
            title="Thilshan Mohamed"
            subtitle="thilshan@gmail.com"
            icon={<MdDeleteSweep size={30} />}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
