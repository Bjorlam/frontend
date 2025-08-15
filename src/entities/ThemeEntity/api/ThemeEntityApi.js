import { useThemeStore } from "../model/ThemeEntityStore";

export function toggleTheme() {
    const themeStore = useThemeStore();
    const newTheme = themeStore.getTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
}

export function setTheme(theme) {
    const themeStore = useThemeStore();
    document.documentElement.setAttribute("data-theme", theme);
    themeStore.setTheme(theme);
}

export function getTheme() {
    const themeStore = useThemeStore();
    return themeStore.getTheme;
}

export function getStore() {
    const themeStore = useThemeStore();
    return themeStore;
}
