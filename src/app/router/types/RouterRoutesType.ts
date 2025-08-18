export interface RouterRoutesType {
    cityDepartureId: number;
    cityArrivalId: number;
    date: Date;
    person: number;
}

export function createRouterRoutesType(cityDepartureId: number, cityArrivalId: number, date: Date, person: number): RouterRoutesType {
    return {
        cityDepartureId,
        cityArrivalId,
        date,
        person,
    };
}

export function toRouteParams(params: RouterRoutesType): Record<string, string> {
    return {
        cityDepartureId: String(params.cityDepartureId),
        cityArrivalId: String(params.cityArrivalId),
        date: params.date.toISOString(),
        person: String(params.person),
    };
}

export function fromRouteParams(params: Record<string, string>): RouterRoutesType {
    const [day, month, year] = params.date.split(".").map(Number);
    const date = new Date(year, month - 1, day);
    return {
        cityDepartureId: Number(params.cityDepartureId),
        cityArrivalId: Number(params.cityArrivalId),
        date: date,
        person: Number(params.person),
    };
}
