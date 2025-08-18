import { api } from "./base";

export const getArrivals = async (departureCityId: number) => {
    const response = await api.get(`/arrivals?departure=${departureCityId}`);
    return response.data[0].points;
};
