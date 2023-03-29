import { equipmentFile } from "../data/equipment";

export function getEquipment(id) {
  let equipment = {
    id: "",
    equipmentModelId: "",
    name: "",
  };

  let filteredEqpById = equipmentFile.filter((eqp) => eqp.id === id);

  equipment = {
    id: filteredEqpById[0].id,
    equipmentModelId: filteredEqpById[0].equipmentModelId,
    name: filteredEqpById[0].name,
  };
  return equipment;
}
