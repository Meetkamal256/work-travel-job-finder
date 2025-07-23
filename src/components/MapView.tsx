import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import { useEffect } from "react";
import type { Company } from "../types";


delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Custom component to update map view when companies change
const MapUpdater = ({ companies }: { companies: Company[] }) => {
  const map = useMap();

  useEffect(() => {
    if (companies.length > 0) {
      const bounds = L.latLngBounds(
        companies.map((c) => [c.latitude, c.longitude] as [number, number])
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [companies]);

  return null;
};

type MapViewProps = {
  selectedState: string;
  selectedIndustry: string;
  companies: Company[];
};

const MapView = ({
  selectedState,
  selectedIndustry,
  companies,
}: MapViewProps) => {
  const defaultPosition: [number, number] = [9.082, 8.6753]; // Nigeria center

  const filteredCompanies = companies.filter((company) => {
    const matchState = selectedState === "" || company.state === selectedState;
    const matchIndustry =
      selectedIndustry === "" || company.industry === selectedIndustry;
    return matchState && matchIndustry;
  });

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

        {filteredCompanies.map((company) => (
          <Marker
            key={company.companyId}
            position={[company.latitude, company.longitude]}
          >
            <Popup>
              <strong>{company.companyName}</strong>
              <br />
              {company.address}
              <br />
              {company.state}
            </Popup>
          </Marker>
        ))}

        <MapUpdater companies={filteredCompanies} />
      </MapContainer>
    </div>
  );
};

export default MapView;
