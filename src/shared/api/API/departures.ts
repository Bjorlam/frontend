import { api } from "./base";

export const getDepartures = async () => {
    const response = await api.get("/departures");
    return response.data[0].points;
};
