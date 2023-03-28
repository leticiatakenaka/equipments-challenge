import * as React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import { apiKey } from "../apiKey";
import { getEquipmentsLastPosition } from "./getEquipmentsLastPosition";

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
    // googleMapsApiKey: apiKey,
  });

  const eqpPositions = getEquipmentsLastPosition();

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      {eqpPositions.map((equipment, i) => (
        <Marker
          key={i}
          position={{
            lat: equipment.lastPosition.lat,
            lng: equipment.lastPosition.lon,
          }}
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
