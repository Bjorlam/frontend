import {computed, type ComputedRef, reactive} from "vue";
import {defineStore} from "pinia";
import {createTheme, type ThemeType} from "@/entities/ThemeEntity/types/ThemeType.ts";

export interface ThemeStore {
    state: { current: ThemeType };
    setTheme: (theme: ThemeType) => void;
    getTheme: ComputedRef<ThemeType>;
}

export const useThemeStore = defineStore("theme", (): ThemeStore => {
    const storedTheme: ThemeType = createTheme(localStorage.getItem('theme'));
    const state: { current: ThemeType } = reactive({
        current: storedTheme as ThemeType,
    });

    const getTheme = computed((): ThemeType => state.current);

    const setTheme = (theme: ThemeType): void => {
        state.current = theme;
        localStorage.setItem("theme", theme);
    };

    return {
        state,
        getTheme,
        setTheme,
    };
});
