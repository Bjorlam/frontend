import { reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", () => {
    const storedTheme = localStorage.getItem("theme") || "light";

    const state = reactive({
        current: storedTheme,
    });

    const getTheme = computed(() => state.current);

    const setTheme = (theme) => {
        state.current = theme;
        localStorage.setItem("theme", theme);
    };

    return {
        state,
        getTheme,
        setTheme,
    };
});
