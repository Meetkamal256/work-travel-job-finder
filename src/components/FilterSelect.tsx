type FilterSelectProps = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

const FilterSelect = ({
  label,
  options,
  value,
  onChange,
}: FilterSelectProps) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
      <label className="block text-sm font-medium text-gray-800 mb-2">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSelect;
