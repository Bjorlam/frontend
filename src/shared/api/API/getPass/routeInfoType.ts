export interface Insurance {
    price: number;
    name: string;
    id: number;
}

export interface DocType {
    name: string;
    id: number;
    mask: string;
}

export interface Place {
    number: string | null;
    level: number;
    price: number;
    x: number;
    y: number;
    id: number | null;
    type: number;
}

export interface ReturnPolicy {
    name: string;
}

export interface Passenger {
    lName: string | null;
    passangerID: number;
    baggage: number;
    sName: string | null;
    sex: string;
    discount: number;
    pasTarif: number;
    totalTarif: number;
    fName: string | null;
    insurancePrice: number;
    insuranceId: number;
    bagTarif: number;
    agentTarif: number;
}

export interface RouteInfoType {
    insurance: Insurance[];
    baggagePrice: number;
    orderType: string;
    arrDate: Date;
    isInsurance: boolean;
    arrCity: string;
    depCity: string;
    sessionID: string;
    passcount: number;
    uuid: string;
    platform: string;
    depDate: Date;
    isFreePlaces: boolean;
    arrDateTime: Date;
    raceNum: string;
    arrayX: number;
    email: string | null;
    orderName: string;
    arrayY: number;
    arrStation: string;
    orderID: number;
    depTime: string;
    docTypes: DocType[];
    seatlimit: number;
    carrier: string;
    places: Place[];
    phone: string | null;
    returns: ReturnPolicy[];
    passangers: Passenger[];
    insuranceTotal: number;
    depStation: string;
    arrTime: string;
    levels: number;
    totalCost: number;
    depDateTime: Date;
}
