import { type TripType } from "./tripType";
import { api } from "../base";

export const getTrip = async (
    orderId: number,
    uuid: string
): Promise<TripType> => {
    const response = await api.get(
        `/reserve/getpass?uuid=${uuid}&orderid=${orderId}`
    );
    return normalizeResponse(response.data[0]);
};

function normalizeResponse(raw: any): TripType {
    return {
        insurance: (raw.insurance ?? []).map((i: any) => ({
            price: Number(i.price),
            name: String(i.name),
            id: Number(i.id),
        })),
        baggagePrice: Number(raw.baggagePrice),
        orderType: String(raw.orderType),
        arrDate: new Date(raw.arrDateTime), // точное время берем из ISO
        isInsurance: raw.isInsurance === "Y",
        arrCity: String(raw.arrCity),
        depCity: String(raw.depCity),
        sessionID: String(raw.sessionID),
        passcount: Number(raw.passcount),
        uuid: String(raw.uuid),
        platform: String(raw.platform),
        depDate: new Date(raw.depDateTime),
        isFreePlaces: raw.isFreePlaces === "Y",
        arrDateTime: new Date(raw.arrDateTime),
        raceNum: String(raw.raceNum),
        arrayX: Number(raw.arrayX),
        email: raw.email ?? null,
        orderName: String(raw.orderName),
        arrayY: Number(raw.arrayY),
        arrStation: String(raw.arrStation),
        orderID: Number(raw.orderID),
        depTime: String(raw.depTime),
        docTypes: (raw.docTypes ?? []).map((d: any) => ({
            name: String(d.name),
            id: Number(d.id),
            mask: String(d.mask),
        })),
        seatlimit: Number(raw.seatlimit),
        carrier: String(raw.carrier),
        seats: (raw.places ?? []).map((p: any) => ({
            number: p.number ? Number(p.number) : null,
            level: Number(p.level),
            price: Number(p.price),
            x: Number(p.x),
            y: Number(p.y),
            id: p.id ? Number(p.id) : null,
            type: Number(p.type),
        })),
        phone: raw.phone ?? null,
        returns: (raw.returns ?? []).map((r: any) => ({
            name: String(r.name),
        })),
        passangers: (raw.passangers ?? []).map((p: any) => ({
            lName: p.lName ?? null,
            passangerID: Number(p.passangerID),
            baggage: Number(p.baggage),
            sName: p.sName ?? null,
            sex: String(p.sex),
            discount: Number(p.discount),
            pasTarif: Number(p.pasTarif),
            totalTarif: Number(p.totalTarif),
            fName: p.fName ?? null,
            insurancePrice: Number(p.insurancePrice),
            insuranceId: Number(p.insuranceId),
            bagTarif: Number(p.bagTarif),
            agentTarif: Number(p.agentTarif),
        })),
        insuranceTotal: Number(raw.insuranceTotal),
        depStation: String(raw.depStation),
        arrTime: String(raw.arrTime),
        levels: Number(raw.levels),
        totalCost: Number(raw.totalCost),
        depDateTime: new Date(raw.depDateTime),
    };
}
