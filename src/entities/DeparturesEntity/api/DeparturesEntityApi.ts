import { useDeparturesEntityStore } from "../model/DeparturesEntityStore";
import type { DepartureType } from "../types/DepartureType";
import { getDepartures } from "@/shared/api/API/departures";

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

export async function getLoadAllDepartures(): Promise<DepartureType[]> {
    if (getAllDepartures().length !== 0) {
        return getAllDepartures();
    }

    const departures: DepartureType[] = await getDepartures();
    setDepartures(departures);
    return departures;
}
