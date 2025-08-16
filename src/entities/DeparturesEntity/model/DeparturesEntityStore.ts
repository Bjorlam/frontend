import {defineStore} from 'pinia';
import type {DepartureType} from '../types/DepartureType';

export const useDeparturesEntityStore = defineStore('departures', {
    state: () => ({
        departures: [] as DepartureType[],
    }),

    actions: {
        setDepartures(departures: DepartureType[]) {
            this.departures = departures;
        },

        getAll(): DepartureType[] {
            return this.departures;
        },

        getByName(name: string): DepartureType | undefined {
            return this.departures.find(dep => dep.name === name);
        },

        getByCityID(cityID: number): DepartureType | undefined {
            return this.departures.find(dep => dep.cityID === cityID);
        },
    },
});
