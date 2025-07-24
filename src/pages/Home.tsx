import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import FilterSelect from "../components/FilterSelect";
import ToggleButton from "../components/ToggleButton";
import JobCard from "../components/JobCard";
import companies from "../data/companies.json";
import MapView from "../components/MapView";

const Home = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [workType, setWorkType] = useState<"Onsite" | "Remote">("Onsite");
  const [contactedCompanies, setContactedCompanies] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

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

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);

  const paginatedCompanies = filteredCompanies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleContacted = (companyId: string) => {
    setContactedCompanies((prev) =>
      prev.includes(companyId)
        ? prev.filter((id) => id !== companyId)
        : [...prev, companyId]
    );
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedState, selectedIndustry, workType]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 md:px-10 lg:px-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-6">
        Work Travel Job Finder
      </h1>

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

          {/* Cards with animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="wait">
              {paginatedCompanies.map((company) => (
                <motion.div
                  key={company.companyId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <JobCard
                    {...company}
                    isContacted={contactedCompanies.includes(company.companyId)}
                    onToggleContacted={() => toggleContacted(company.companyId)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredCompanies.length === 0 && (
            <p className="text-center text-gray-600 mt-8 text-lg">
              ⚠️ No jobs found for this filter. Try a different state or
              industry.
            </p>
          )}

          {/* Pagination Controls */}
          {filteredCompanies.length > itemsPerPage && (
            <div className="flex justify-center gap-2 mt-8">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-indigo-100 rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span className="px-4 py-2 font-medium">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-indigo-100 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* Right Section - Map View */}
        <div className="lg:w-1/3 w-full min-h-[400px] sm:min-h-[500px] lg:h-auto mb-10">
          <MapView
            selectedState={selectedState}
            selectedIndustry={selectedIndustry}
            companies={filteredCompanies}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
