import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import {locations} from "#constants"

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(
    immer((set) => ({
        activeLocation: DEFAULT_LOCATION,

        setActiveLocation: (locations = null) =>
            set((state) => {
                state.activeLocation = locations;
            }),

        resetActiveLocation: () =>
            set((state) => {
                state.activeLocation = DEFAULT_LOCATION;
            }),
    })),
);

export default useLocationStore;
