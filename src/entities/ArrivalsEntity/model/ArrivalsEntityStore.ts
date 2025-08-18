import { defineStore } from "pinia";
import type { ArrivalType } from "../types/ArrivalType";

export const useArrivalsEntityStore = defineStore("arrivals", {
    state: () => ({
        arrivals: [] as ArrivalType[],
        departure: undefined as unknown as number,
    }),

    actions: {
        setArrivals(arrivals: ArrivalType[], departure: number) {
            this.arrivals = arrivals;
            this.departure = departure;
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
        getDeparture(): number | undefined {
            return this.departure;
        },
    },
});
