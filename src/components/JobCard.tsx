import type { JobCardProps } from "../types";

const JobCard = ({
  companyName,
  address,
  state,
  firstName,
  lastName,
  email,
  phoneNumber,
  latitude,
  longitude,
  industry,
  isContacted,
  onToggleContacted,
}: JobCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5 mb-5 transition-colors duration-300">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white">
        {companyName}
      </h2>

      <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">
        <p>
          {address}, {state}
        </p>
        <p className="mt-1">
          Contact: {firstName} {lastName}
        </p>
        <p>Email: {email}</p>
        <p>Phone: {phoneNumber}</p>
        <p className="mt-1">Industry: {industry}</p>
        <p>
          Coordinates: {latitude}, {longitude}
        </p>
      </div>

      <p className="text-sm mt-3 font-semibold text-indigo-600 dark:text-indigo-300">
        Onsite
      </p>

      <button
        onClick={onToggleContacted}
        className={`mt-4 text-sm px-4 py-2 rounded-md font-medium border transition-colors duration-200
          ${
            isContacted
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
          }`}
      >
        {isContacted ? "✓ Contacted" : "Mark as Contacted"}
      </button>
    </div>
  );
};

export default JobCard;
