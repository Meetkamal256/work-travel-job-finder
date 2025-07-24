import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import FilterSelect from "../components/FilterSelect";
import ToggleButton from "../components/ToggleButton";
import JobCard from "../components/JobCard";
import companies from "../data/companies.json";
import MapView from "../components/MapView";
import ThemeToggleSwitch from "../components/ThemeToggleSwitch";

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
    const stateMatch = selectedState ? company.state === selectedState : true;
    const industryMatch = selectedIndustry
      ? company.industry === selectedIndustry
      : true;

    return stateMatch && industryMatch;
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
  }, [selectedState, selectedIndustry]);
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-8 sm:px-6 md:px-10 lg:px-16 text-gray-800 dark:text-gray-100">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggleSwitch />
      </div>
      
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center  
  bg-gradient-to-r from-indigo-600 to-blue-400 
  bg-clip-text text-transparent 
  dark:bg-none dark:text-slate-300 mb-8 mt-6"
      >
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
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="wait">
              {paginatedCompanies.map((company, index) => (
                <motion.div
                  layout
                  key={company.companyId}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: index * 0.05,
                  }}
                >
                  <JobCard
                    {...company}
                    isContacted={contactedCompanies.includes(company.companyId)}
                    onToggleContacted={() => toggleContacted(company.companyId)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredCompanies.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-600 dark:text-gray-400 mt-8 text-lg"
            >
              ⚠️ No jobs found for this filter. Try a different state or
              industry.
            </motion.p>
          )}
          
          {/* Pagination Controls */}
          {filteredCompanies.length > itemsPerPage && (
            <motion.div
              layout
              className="flex justify-center gap-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-indigo-100 dark:bg-indigo-800 dark:text-white rounded disabled:opacity-50"
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
                className="px-4 py-2 bg-indigo-100 dark:bg-indigo-800 dark:text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </motion.div>
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
