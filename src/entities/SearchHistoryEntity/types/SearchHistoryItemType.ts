export interface SearchHistoryItemType {
    id: string;
    cityDepartureName: string;
    cityDepartureId: number;
    cityArrivalName: string;
    cityArrivalId: number;
    person: number;
}

export function createSearchHistoryItem(
    cityDepartureName: string,
    cityDepartureId: number,
    cityArrivalName: string,
    cityArrivalId: number,
    person: number
): SearchHistoryItemType {
    return {
        id:
            Math.random().toString(36).substring(2, 9) +
            Date.now().toString(36),
        cityDepartureName: cityDepartureName,
        cityDepartureId: cityDepartureId,
        cityArrivalName: cityArrivalName,
        cityArrivalId: cityArrivalId,
        person: person,
    };
}
