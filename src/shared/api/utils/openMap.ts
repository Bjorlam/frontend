export function openMap(place: string) {
    window.open(
        `https://www.google.com/maps/search/${place}`,
        "_blank",
        "noopener,noreferrer"
    );
}
