import {api} from "./base";

export const getDepartures = () =>
    api.get("/departures").then(res => res.data);