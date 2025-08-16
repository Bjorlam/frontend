import {useDeparturesEntityStore} from "../model/DeparturesEntityStore";
import type {DepartureType} from "../types/DepartureType";

export function setDepartures(departures: DepartureType[]): void {
    const store = useDeparturesEntityStore();
    store.setDepartures(departures);
}

export function getAllDepartures(): DepartureType[] {
    const store = useDeparturesEntityStore();
    return store.getAll();
}

export function getDepartureByName(name: string): DepartureType | undefined {
    const store = useDeparturesEntityStore();
    return store.getByName(name);
}

export function getDepartureByCityID(cityID: number): DepartureType | undefined {
    const store = useDeparturesEntityStore();
    return store.getByCityID(cityID);
}

export function getStore() {
    return useDeparturesEntityStore();
}
