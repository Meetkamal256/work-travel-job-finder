const ToggleButton = () => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
      <div className="block text-sm font-medium text-gray-700 mb-2">
        Work Type
      </div>
      <div className="w-20 h-10 flex items-center bg-gray-300 rounded-full p-1">
        <div className="bg-white w-8 h-8 rounded-full shadow-md" />
      </div>
      <p className="mt-2 text-sm text-gray-600">Onsite</p>
    </div>
  );
};

export default ToggleButton;
