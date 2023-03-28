import { equipmentPositionHistoryFile } from "../data/equipmentPositionHistory";

export function getEquipmentsLastPosition() {
  let equipmentsList = [];

  equipmentPositionHistoryFile.forEach((eqp) => {
    let lastPosition = {
      date: "",
      lat: 0.0,
      lon: 0.0,
    };

    let filteredListByEquipment = equipmentPositionHistoryFile.filter(
      (history) => history.equipmentId === eqp.equipmentId
    );

    filteredListByEquipment.forEach((hist) => {
      hist.positions.forEach((pos) => {
        if (pos.date > lastPosition.date) {
          lastPosition.date = pos.date;
          lastPosition.lat = pos.lat;
          lastPosition.lon = pos.lon;
        }
      });
    });

    let retEquipment = {
      equipment: eqp.equipmentId,
      lastPosition: lastPosition,
    };

    equipmentsList.push(retEquipment);
  });
  return equipmentsList;
}
