import { format, parse } from "date-fns";

export interface RouterHomeQueryType {
    cityDepartureName?: string | null;
    cityArrivalName?: string | null;
    date?: Date | null;
    person?: number | null;
}

export function createRouterHomeQueryType(cityDepartureName?: string | null, cityArrivalName?: string | null, date?: Date | null, person?: number | null): RouterHomeQueryType {
    return {
        cityDepartureName,
        cityArrivalName,
        date,
        person,
    };
}

export function toQueryParams(params: RouterHomeQueryType): Record<string, string> {
    return {
        cityDepartureName: params.cityDepartureName ?? "",
        cityArrivalName: params.cityArrivalName ?? "",
        date: params.date ? format(params.date, "dd.MM.yyyy") : "",
        person: String(params.person ?? 1),
    };
}

export function fromQueryParams(params: Record<string, string>): RouterHomeQueryType {
    return {
        cityDepartureName: params.cityDepartureName || null,
        cityArrivalName: params.cityArrivalName || null,
        date: params.date ? parse(params.date, "dd.MM.yyyy", new Date()) : null,
        person: params.person ? Number(params.person) : null,
    };
}
