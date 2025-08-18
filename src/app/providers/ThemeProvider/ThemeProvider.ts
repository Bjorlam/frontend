import {Api as ThemeApi, Types} from "@/entities/ThemeEntity";

export async function useThemeProvider(): Promise<void> {
    const currentTheme: Types.ThemeType | null = ThemeApi.getTheme();

    if (currentTheme && currentTheme !== 'unset') {
        ThemeApi.setTheme(currentTheme);
        return;
    }

    const systemPrefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches;
    const themeToSet = Types.createTheme(systemPrefersDark ? 'dark' : 'light');

    ThemeApi.setTheme(themeToSet);
}
