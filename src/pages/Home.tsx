import FilterSelect from "../components/FilterSelect";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 md:px-10 lg:px-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-6">
        Work Travel Job Finder
      </h1>
      <div className="flex flex-wrap">
        <FilterSelect />
      </div>
    </div>
  );
};

export default Home;
