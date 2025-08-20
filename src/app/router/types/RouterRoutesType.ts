import { format } from "date-fns";

export interface RouterRoutesType {
    cityDepartureId: number;
    cityArrivalId: number;
    date: Date;
    person: number;
}

export function createRouterRoutesType(
    cityDepartureId: number,
    cityArrivalId: number,
    date: Date,
    person: number
): RouterRoutesType {
    return {
        cityDepartureId,
        cityArrivalId,
        date,
        person,
    };
}

export function toRouteParams(
    params: RouterRoutesType
): Record<string, string> {
    return {
        cityDepartureId: String(params.cityDepartureId),
        cityArrivalId: String(params.cityArrivalId),
        date: format(params.date, "dd.MM.yyyy"),
        person: String(params.person),
    };
}

export function fromRouteParams(
    params: Record<string, string | string[] | undefined>
): RouterRoutesType {
    const getString = (val: string | string[] | undefined): string =>
        Array.isArray(val) ? val[0] : val ?? "";

    const dateStr = getString(params.date);
    const [day, month, year] = dateStr.split(".").map(Number);
    const date = new Date(year, month - 1, day);

    return {
        cityDepartureId: Number(getString(params.cityDepartureId)),
        cityArrivalId: Number(getString(params.cityArrivalId)),
        date,
        person: Number(getString(params.person)),
    };
}
