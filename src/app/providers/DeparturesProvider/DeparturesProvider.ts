import {Api as DepartureEntityApi} from "@/entities/DeparturesEntity";
import {getDepartures} from "@/shared/api/API/departures.ts"
import type {DepartureType} from "@/entities/DeparturesEntity/types/DepartureType.ts";

export async function useDeparturesProvider(): Promise<void> {
    await getDepartures().then(departures => setDepartures(departures[0].points));
}

function setDepartures(departures: DepartureType[]): void {
    DepartureEntityApi.setDepartures(departures);
}
