type ToggleButtonProps = {
  value: "Onsite" | "Remote";
  onChange: (value: "Onsite" | "Remote") => void;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ value, onChange }) => {
  const isOnsite = value === "Onsite";
  
  const handleToggle = () => {
    const newValue = isOnsite ? "Remote" : "Onsite";
    onChange(newValue);
  };
  
  return (
    <div className="w-full px-2 mb-4">
      <div className="block text-sm font-medium text-gray-700 mb-2">
        Work Type
      </div>
      
      <button
        onClick={handleToggle}
        className={`w-20 h-10 flex items-center ${
          isOnsite ? "bg-gray-300" : "bg-indigo-500"
        } rounded-full p-1 transition-colors duration-300`}
      >
        <div
          className={`bg-white w-8 h-8 rounded-full shadow-md transform transition-transform duration-300 ${
            isOnsite ? "translate-x-0" : "translate-x-10"
          }`}
        />
      </button>
      
      <p className="mt-2 text-sm text-gray-600">{value}</p>
    </div>
  );
};

export default ToggleButton;
