import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

type MapViewProps = {
  selectedState: string;
};

// Fix Leaflet's default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const MapView = ({ selectedState }: MapViewProps) => {
  const defaultPosition: [number, number] = [9.082, 8.6753]; // Nigeria center

  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[900px] bg-blue-100 rounded-xl overflow-hidden shadow-md mb-10">
      <MapContainer
        center={defaultPosition}
        zoom={6}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={defaultPosition}>
          <Popup>
            {selectedState
              ? `Showing job locations in ${selectedState}`
              : "Select a state to see jobs on the map"}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
