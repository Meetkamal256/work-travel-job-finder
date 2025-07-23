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
    <div className="bg-white rounded-xl shadow-md p-4 mb-4">
      <h2 className="text-lg font-semibold text-indigo-700">{companyName}</h2>
      <p className="text-sm text-gray-600">
        {address}, {state}
      </p>
      <p className="text-sm text-gray-600 mt-1">
        Contact: {firstName} {lastName}
      </p>
      <p className="text-sm text-gray-600">Email: {email}</p>
      <p className="text-sm text-gray-600">Phone: {phoneNumber}</p>
      <p className="text-sm text-gray-600 mt-1">Industry: {industry}</p>
      <p className="text-sm text-gray-600">
        Coordinates: {latitude}, {longitude}
      </p>
      <p className="text-sm mt-2 font-medium text-indigo-500">Onsite</p>
      <button
        onClick={onToggleContacted}
        className={`mt-3 text-sm px-3 py-1 rounded border ${
          isContacted
            ? "bg-green-500 text-white hover:bg-green-600"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        {isContacted ? "✓ Contacted" : "Mark as Contacted"}
      </button>
    </div>
  );
};

export default JobCard;
