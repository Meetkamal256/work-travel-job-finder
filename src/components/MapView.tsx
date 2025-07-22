type MapViewProps = {
  selectedState: string;
}

const MapView = ({selectedState}: MapViewProps) => {
  return (
    <div className="h-64 md:h-full bg-blue-100 rounded-xl flex items-center justify-center text-center p-4 shadow-md">
      <div>
        <div className="text-2xl">🗺️</div>
        <p className="mt-2 text-gray-700 font-medium">
          {selectedState
            ? `Showing job locations in ${selectedState}`
            : "Select a state to see jobs on the map"}
        </p>
      </div>
    </div>
  );
};

export default MapView;
