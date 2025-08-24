<script setup lang="ts">
import { SecondaryButton } from "@/shared/ui/Button";
import WebIcon from "vue-material-design-icons/Web.vue";
import WeatherSunnyIcon from "vue-material-design-icons/WeatherSunny.vue";
import WeatherNightIcon from "vue-material-design-icons/WeatherNight.vue";

import Logo from "@/shared/ui/Logo";
</script>

<template>
    <div class="flex items-center justify-between h-8">
        <Logo class="**:w-3/4" />
        <div class="flex [&>*+*]:ml-2">
            <SecondaryButton class="border-none">
                <WebIcon />
            </SecondaryButton>
            <SecondaryButton @click="toggleTheme" class="border-none">
                <WeatherSunnyIcon
                    v-if="ThemeApi.getStore().state.current == 'dark'" />
                <WeatherNightIcon v-else />
            </SecondaryButton>
        </div>
    </div>
</template>

<script lang="ts">
import { Api as ThemeApi } from "@/entities/ThemeEntity";
import { defineComponent } from "vue";

export default defineComponent({
    methods: {
        toggleTheme() {
            ThemeApi.toggleTheme();
        },
    },
});
</script>
