import {useThemeStore} from "../model/ThemeEntityStore.js";
import type {ThemeType} from "@/entities/ThemeEntity/types/ThemeType.ts";
import {oppositeTheme} from "@/entities/ThemeEntity/types/ThemeType.ts";

export function toggleTheme(): void {
    const themeStore = useThemeStore();
    const newTheme: ThemeType = oppositeTheme(themeStore.getTheme);
    setTheme(newTheme);
}

export function setTheme(theme: ThemeType): void {
    const themeStore = useThemeStore();
    document.documentElement.setAttribute("data-theme", theme);
    themeStore.setTheme(theme);
}

export function getTheme(): ThemeType {
    const themeStore = useThemeStore();
    return themeStore.getTheme;
}

export function getStore() {
    return useThemeStore();
}
