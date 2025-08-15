<script setup lang="js">
import { SecondaryButtonWidget } from '@/widgets/ButtonWidget';
import WebIcon from 'vue-material-design-icons/Web.vue';
import WeatherSunnyIcon from 'vue-material-design-icons/WeatherSunny.vue';
import WeatherNightIcon from 'vue-material-design-icons/WeatherNight.vue';
import { toggleTheme } from '@/entities/ThemeEntity/api/ThemeEntityApi';
import LogoWidget from '@/widgets/LogoWidget/ui/LogoWidget.vue';
</script>

<template>
    <div class="flex items-center justify-between h-8">
        <LogoWidget class="h-1/2" />
        <div class="flex">
            <SecondaryButtonWidget>
                <WebIcon />
            </SecondaryButtonWidget>
            <SecondaryButtonWidget @click="toggleTheme" class="ml-2">
                <WeatherSunnyIcon v-if="ThemeEntity.Api.getStore().state.current == 'dark'" />
                <WeatherNightIcon v-else />
            </SecondaryButtonWidget>
        </div>
    </div>
</template>

<script lang="js">
import { ThemeEntity } from "@/entities/ThemeEntity";

export default {
    methods: {
        toggleTheme() {
            alert("Toggle theme clicked");
            ThemeEntity.Api.toggleTheme();
        },
    },
};
</script>
