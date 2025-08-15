export type ThemeType = 'dark' | 'light' | "unset";

export function oppositeTheme(theme: ThemeType): ThemeType {
    return theme === 'dark' ? 'light' : 'dark';
}

export function createTheme(theme: string | null): ThemeType {
    return theme === 'dark' ? 'dark' : theme === 'light' ? 'light' : "unset";
}