export function clearAddress(address: string): string {
    const parts = address.split(",");

    const filtered = parts.filter((part) => {
        const trimmed = part.trim().toLowerCase();
        return !blacklist.some((word) => trimmed.includes(word.toLowerCase()));
    });

    return filtered.map((p) => p.trim()).join(", ");
}

const blacklist: string[] = ["автовокзал", "ав"];
