<script setup lang="ts">
import HeaderWidget from "@/widgets/HeaderWidget";
import Alerts from "@/features/AlertsFeature/inedx";
</script>

<template>
    <div class="wrapper-base wrapper-922">
        <HeaderWidget class="w-full mt-5" />
    </div>

    <div>
        <RouterView />
    </div>
    <div>
        <Alerts />
    </div>
</template>

<script lang="ts">
import { useThemeProvider } from "./providers/ThemeProvider/ThemeProvider";
import { defineComponent } from "vue";
import { useAlertProvider } from "@/app/providers/AlertsProvider/AlertProvider";

export default defineComponent({
    async mounted() {
        await useThemeProvider();
        await useAlertProvider();
    },
});
</script>
