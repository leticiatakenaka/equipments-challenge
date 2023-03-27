import * as React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { apiKey } from "../apiKey";
import { calculatesLatestDates } from "../calculatesLatestDates";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -19.171667,
  lng: -46.044589,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const [map, setMap] = React.useState(null);

  const equipmentsList = calculatesLatestDates();

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      {equipmentsList.map((equipment) => (
        <Marker position={{ lat: equipment.lat, lng: equipment.lon }} />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
