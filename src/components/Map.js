import * as React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import { apiKey } from "../apiKey";
import { equipmentPositionHistoryFile } from "../data/equipmentPositionHistory";
import { getEquipmentsLastPosition } from "./getEquipmentsLastPosition";
import { getEquipmentLastState } from "./getEquipmentLastState";

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

  const equipamentos = equipmentPositionHistoryFile;
  const eqpPositions = getEquipmentsLastPosition(equipamentos);

  let eqpLastState = [];

  eqpPositions.forEach((eqp) => {
    eqpLastState.push({
      lat: eqp.lastPosition.lat,
      lon: eqp.lastPosition.lon,
      state: getEquipmentLastState(eqp.equipment.equipmentId),
    });
  });

  console.log(eqpLastState);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      {eqpLastState.map((eqp, i) => (
        <Marker
          key={i}
          position={{
            lat: eqp.lat,
            lng: eqp.lon,
          }}
          options={{
            icon: {
              url:
                eqp.state.lastState.id ===
                "baff9783-84e8-4e01-874b-6fd743b875ad"
                  ? "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
                  : eqp.state.lastState.id ===
                    "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f"
                  ? "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                  : eqp.state.lastState.id ===
                    "0808344c-454b-4c36-89e8-d7687e692d57"
                  ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                  : null,
            },
          }}
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
