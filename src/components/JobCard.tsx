type JobCardProps = {
  companyId: string;
  companyName: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  state: string;
  latitude: number;
  longitude: number;
  industry: string;
};


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
    </div>
  );
};

export default JobCard;
