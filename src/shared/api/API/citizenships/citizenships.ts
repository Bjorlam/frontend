import { type citizenshipType } from "./citizenshipsType";
import { api } from "../base";

export const getRouteInfo = async (): Promise<citizenshipType[]> => {
    const response = await api.get("/reserve/ctzn");
    return response.data[0].citizenship;
};
