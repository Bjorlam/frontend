import { parse } from "date-fns";
import { api } from "../base";
import type { RouteType } from "@/shared/api/API/routes/types";

export const getRoutes = async (
    from: number,
    to: number,
    date: Date,
    person: number
): Promise<RouteType[] | Date | undefined> => {
    const response = await api.get(
        `/search?departure=${from}&arrival=${to}&date=${date.toLocaleDateString(
            "ru-RU",
            { day: "2-digit", month: "2-digit", year: "numeric" }
        )}&person=${person}`
    );

    if (response.data[0].races.length !== 0) {
        return response.data[0].races.map(normalizeResponse);
    }

    if (response.data[1].nextdate != "") {
        return parse(response.data[1].nextdate, "yyyy-MM-dd", new Date());
    }

    return undefined;
};

function normalizeResponse(raw: any): RouteType {
    const toBool = (v: any) => {
        if (v === "Y") return true;
        if (v === "N") return false;
        return Boolean(v);
    };

    const toNumber = (v: any) => {
        if (typeof v === "string" && !isNaN(Number(v))) {
            return Number(v);
        }
        return v;
    };

    const parseDateTime = (dateStr: string, timeStr: string): Date => {
        const [day, month, year] = dateStr.split(".").map(Number);
        const [hours, minutes] = timeStr.split(":").map(Number);
        return new Date(year, month - 1, day, hours, minutes);
    };

    return {
        stationDepID: toNumber(raw.stationDepID),
        stationDepAddr: raw.stationDepAddr,
        depCity: raw.depCity,
        arrCity: raw.arrCity,
        depDateTime: parseDateTime(raw.depDate, raw.depTime),
        arrDateTime: parseDateTime(raw.arrDate, raw.arrTime),
        isBook: toBool(raw.isBook),
        raceName: raw.raceName,
        raceNum: raw.raceNum,
        carrier: raw.Carrier,
        baggageCost: toNumber(raw.baggageCost),
        cost: toNumber(raw.cost),
        tripTime: raw.tripTime,
        stationDepName: raw.stationDepName,
        stationArrName: raw.stationArrName,
        stationArrAddr: raw.stationArrAddr,
        stationArrID: toNumber(raw.stationArrID),
        raceID: toNumber(raw.raceID),
        scheduleID: toNumber(raw.scheduleID),
        isPrintTicket: Boolean(raw.isPrintTicket),
        canBuyBaggage: Boolean(raw.canBuyBaggage),
        isDetails: toBool(raw.isDetails),
        places: toNumber(raw.places),
        placesColor: raw.placesColor,
    };
}
