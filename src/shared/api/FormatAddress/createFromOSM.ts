import type { OSMAddressType } from "../OSMApi/getAddress/types";

export function createFromOSM(data: OSMAddressType): string {
    return `${data.city}, ${data.road}, ${data.house_number}`;
}
