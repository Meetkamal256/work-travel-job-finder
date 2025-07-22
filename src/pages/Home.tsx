import { useState } from "react";
import FilterSelect from "../components/FilterSelect";
import ToggleButton from "../components/ToggleButton";
import JobCard from "../components/JobCard";
import companies from "../data/companies.json";
import MapView from "../components/MapView";

const Home = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [workType, setWorkType] = useState<"Onsite" | "Remote">("Onsite");

  const stateOptions = Array.from(
    new Set(companies.map((c) => c.state))
  ).sort();

  const industryOptions = Array.from(
    new Set(companies.map((c) => c.industry))
  ).sort();

  const filteredCompanies = companies.filter((company) => {
    const stateMatch = selectedState === "" || company.state === selectedState;
    const industryMatch =
      selectedIndustry === "" || company.industry === selectedIndustry;

    const workTypeMatch =
      !("workType" in company) || company.workType === workType;

    return stateMatch && industryMatch && workTypeMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 md:px-10 lg:px-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-6">
        Work Travel Job Finder
      </h1>

      {/* Responsive layout: stacked on mobile, side-by-side on desktop */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section - Filters + Job Cards */}
        <div className="lg:w-2/3 w-full">
          <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
            <FilterSelect
              label="Filter by State"
              options={stateOptions}
              value={selectedState}
              onChange={setSelectedState}
            />
            <FilterSelect
              label="Filter by Industry"
              options={industryOptions}
              value={selectedIndustry}
              onChange={setSelectedIndustry}
            />
            <ToggleButton value={workType} onChange={setWorkType} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCompanies.map((company) => (
              <JobCard key={company.companyId} {...company} />
            ))}
          </div>

          {filteredCompanies.length === 0 && (
            <p className="text-center text-gray-600 mt-8 text-lg">
              ⚠️ No jobs found for this filter. Try a different state or
              industry.
            </p>
          )}
        </div>

        {/* Right Section - Placeholder for map or job details */}
        <div className="lg:w-1/3 w-full h-64 lg:h-auto">
          <MapView selectedState={selectedState} />
        </div>
      </div>
    </div>
  );
};

export default Home;
