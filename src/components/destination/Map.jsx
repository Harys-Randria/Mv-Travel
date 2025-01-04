import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ location }) => {
  const center = [location.latitude, location.longitude];

  return (
    <div className="w-full h-72 rounded-lg shadow-lg overflow-hidden">
      <MapContainer
        center={center}
        zoom={12}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>
            Destination: {location.city || 'Unknown City'} <br />
            Coordinates: {location.latitude}, {location.longitude}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
