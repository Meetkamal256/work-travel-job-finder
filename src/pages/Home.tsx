import FilterSelect from "../components/FilterSelect";
import ToggleButton from "../components/ToggleButton";
import JobCard from "../components/JobCard";
import companies from "../data/companies.json"; // <-- Import the data

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 md:px-10 lg:px-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-6">
        Work Travel Job Finder
      </h1>

      <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
        <FilterSelect />
        <ToggleButton />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <JobCard
            key={company.companyId}
            companyId={company.companyId}
            companyName={company.companyName}
            email={company.email}
            firstName={company.firstName}
            lastName={company.lastName}
            phoneNumber={company.phoneNumber}
            address={company.address}
            state={company.state}
            latitude={company.latitude}
            longitude={company.longitude}
            industry={company.industry}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
