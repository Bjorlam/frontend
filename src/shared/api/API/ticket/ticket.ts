import { api } from "../base";
import type { TicketType } from "./types";

export const getTicket = async (scheduleId: number): Promise<TicketType> => {
    const response = await api.get(`/start/ticket?scheduleid=${scheduleId}`);
    return normalizeResponse(response.data[0]);
};

function normalizeResponse(raw: any): TicketType {
    const toBool = (v: any) => {
        if (v === "Y") return true;
        if (v === "N") return false;
        return Boolean(v);
    };

    return {
        seatlimit: raw.seatlimit,
        isFreePlaces: toBool(raw.isFreePlaces),
        orderid: raw.orderid,
        free: raw.free,
        uuid: raw.uuid,
    };
}
