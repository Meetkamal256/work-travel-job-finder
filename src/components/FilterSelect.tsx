const FilterSelect = () => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
      <label className="block text-sm font-medium text-gray-800 mb-2">
        Location
      </label>
      <select className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option>Abuja</option>
        <option>Remote</option>
        <option>London</option>
      </select>
    </div>
  );
};

export default FilterSelect;
