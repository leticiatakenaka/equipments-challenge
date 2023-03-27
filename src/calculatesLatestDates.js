import { equipmentPositionHistory } from "./data/equipmentPositionHistory";

export function calculatesLatestDates() {
  const equipamentos = {};
  let equipmentsArray = [];

  for (let i = 0; i < equipmentPositionHistory.length; i++) {
    const equipamento = equipmentPositionHistory[i].equipmentId;
    const positions = equipmentPositionHistory[i].positions;

    if (!equipamentos[equipamento]) {
      equipamentos[equipamento] = {
        date: positions[0].date,
        lat: positions[0].lat,
        lon: positions[0].lon,
      };
    }

    for (let j = 0; j < positions.length; j++) {
      const dataAtual = new Date(positions[j].date).getTime();
      if (dataAtual > new Date(equipamentos[equipamento].date).getTime()) {
        equipamentos[equipamento] = {
          date: positions[j].date,
          lat: positions[j].lat,
          lon: positions[j].lon,
        };
      }
    }
    equipmentsArray.push(equipamentos[equipamento]);
  }

  return equipmentsArray;
}
