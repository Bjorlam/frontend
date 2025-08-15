export type ThemeType = 'dark' | 'light';

export function oppositeTheme(theme: ThemeType): ThemeType {
    return theme === 'dark' ? 'light' : 'dark';
}

export function createTheme(theme: string | null): ThemeType {
    return theme === 'dark' ? 'dark' : 'light';
}