import { useState } from "react";
import FilterSelect from "../components/FilterSelect";
import ToggleButton from "../components/ToggleButton";
import JobCard from "../components/JobCard";
import companies from "../data/companies.json";

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
      !("workType" in company) || // if no field, include by default
      company.workType === workType;

    return stateMatch && industryMatch && workTypeMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 md:px-10 lg:px-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-6">
        Work Travel Job Finder
      </h1>

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((company) => (
          <JobCard key={company.companyId} {...company} />
        ))}
      </div>
    </div>
  );
};

export default Home;
