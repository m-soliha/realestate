import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import marker from "../img/marker.png";
const SectionMap = () => {
  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={8}
        scrollWheelZoom={true}
        style={{ height: "300px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={[51.505, -0.09]}
          icon={L.icon({ iconUrl: marker, iconSize: 22 })}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};
export default SectionMap;
