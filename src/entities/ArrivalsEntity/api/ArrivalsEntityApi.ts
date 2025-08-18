import { useArrivalsEntityStore } from "../model/ArrivalsEntityStore";
import type { ArrivalType } from "../types/ArrivalType";

export function setArrivals(arrivals: ArrivalType[]): void {
    const store = useArrivalsEntityStore();
    store.setArrivals(arrivals);
}

export function getAllArrivals(): ArrivalType[] {
    const store = useArrivalsEntityStore();
    return store.getAll();
}

export function getArrivalByName(name: string): ArrivalType | undefined {
    const store = useArrivalsEntityStore();
    return store.getByName(name);
}

export function getArrivalByCityID(cityID: number): ArrivalType | undefined {
    const store = useArrivalsEntityStore();
    return store.getByCityID(cityID);
}

export function getStore() {
    return useArrivalsEntityStore();
}
