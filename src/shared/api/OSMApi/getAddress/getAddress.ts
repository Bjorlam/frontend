import axios from "axios";
import { createOSMAddressType, type OSMAddressType } from "./types";

export const getAddress = async (
    address: string
): Promise<OSMAddressType | undefined> => {
    const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${address}`
    );

    if (Array(response.data).length != 0) {
        return createOSMAddressType(response.data[0].address);
    }
};
