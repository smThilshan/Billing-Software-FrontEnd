import React from "react";

const CustomTable = ({ columns, data ,title}) => {
  return (
    <div className="p-4">
      {/* Heading */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>

    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg shadow">
        {/* Table Head */}
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              {columns.map((col, cidx) => (
                <td
                  key={cidx}
                  className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap"
                >
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default CustomTable;
