import { defineStore } from "pinia";
import type { ArrivalType } from "../types/ArrivalType";

export const useArrivalsEntityStore = defineStore("arrivals", {
    state: () => ({
        arrivals: [] as ArrivalType[],
    }),

    actions: {
        setArrivals(arrivals: ArrivalType[]) {
            this.arrivals = arrivals;
        },

        getAll(): ArrivalType[] {
            return this.arrivals;
        },

        getByName(name: string): ArrivalType | undefined {
            return this.arrivals.find((arr) => arr.name === name);
        },

        getByCityID(cityID: number): ArrivalType | undefined {
            return this.arrivals.find((arr) => arr.cityID === cityID);
        },
    },
});
