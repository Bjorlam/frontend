import { useArrivalsEntityStore } from "../model/ArrivalsEntityStore";
import type { ArrivalType } from "../types/ArrivalType";
import { getArrivals } from "@/shared/api/API/arrivals";

export function setArrivals(arrivals: ArrivalType[], departure: number): void {
    const store = useArrivalsEntityStore();
    store.setArrivals(arrivals, departure);
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

export function getDeparture(): number | undefined {
    return useArrivalsEntityStore().getDeparture();
}

export async function getLoadAllArrivals(
    departure: number
): Promise<ArrivalType[]> {
    if (getAllArrivals().length !== 0 && departure === getDeparture()) {
        return getAllArrivals();
    }

    const arrivals: ArrivalType[] = await getArrivals(departure);
    setArrivals(arrivals, departure);
    return arrivals;
}
