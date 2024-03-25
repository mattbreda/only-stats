import { create } from "zustand";
function updateArray(array, object) {
  const index = array.findIndex((item) => item.id === object.id);
  if (index !== -1) {
    array.splice(index, 1);
  } else {
    array.push(object);
  }
  return array;
}
const useSelectedPlayers = create((set) => ({
  selectedPlayers: [],
  loadingPlayerData: false,
  toggleIsLoadingPlayerData:()=> set((state) => ({
    loadingPlayerData: !state.loadingPlayerData,
  })),
  togglePlayer: (player) =>
    set((state) => ({
      selectedPlayers: [...updateArray(state.selectedPlayers, player)],
    })),
}));

export default useSelectedPlayers;
