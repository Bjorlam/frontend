import { ThemeEntity } from "@/entities/ThemeEntity";

export function useThemeProvider() {
    ThemeEntity.Api.setTheme(ThemeEntity.Api.getTheme());
}
