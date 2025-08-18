export interface RouteType {
    stationDepID: number;
    stationDepAddr: string;
    depCity: string;
    arrCity: string;
    depDateTime: Date;
    arrDateTime: Date;
    isBook: boolean;
    raceName: string;
    raceNum: string;
    carrier: string;
    baggageCost: number;
    cost: number;
    tripTime: string;
    stationDepName: string;
    stationArrName: string;
    stationArrAddr: string;
    stationArrID: number;
    raceID: number;
    scheduleID: number;
    isPrintTicket: boolean;
    canBuyBaggage: boolean;
    isDetails: boolean;
    places: number;
    placesColor: string;
}
