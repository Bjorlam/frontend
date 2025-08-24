export interface OSMAddressType {
    house_number: string;
    road: string;
    city: string;
}

export function createOSMAddressType(addressdetails: any): OSMAddressType {
    return {
        house_number: addressdetails.house_number,
        road: addressdetails.road,
        city: addressdetails.city,
    };
}
