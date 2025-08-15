import {Api as ThemeApi} from "@/entities/ThemeEntity";

export function useThemeProvider() {
    ThemeApi.setTheme(ThemeApi.getTheme());
}
