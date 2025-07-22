import React from "react";

const JobCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4">
      <h2 className="text-lg font-semibold text-indigo-700">
        Sydney Harbour Cafe
      </h2>
      <p className="text-sm text-gray-600">
        Circular Quay W, The Rocks NSW 2000, NSW
      </p>
      <p className="text-sm text-gray-600 mt-1">Industry: Hospitality</p>
      <p className="text-sm mt-2 font-medium text-indigo-500">Onsite</p>
    </div>
  );
};

export default JobCard;
