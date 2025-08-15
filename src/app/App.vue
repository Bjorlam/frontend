<script setup>
import HeaderWidget from "@/widgets/HeaderWidget";
import NotificationFeature from "@/features/NotificationFeature/inedx";
</script>

<template>
    <div class="wrapper-base wrapper-922">
        <HeaderWidget class="w-full mt-5" />
    </div>

    <div>
        <RouterView />
    </div>

    <!-- <div>
        <NotificationFeature />
    </div> -->
</template>

<script>
import { useThemeProvider } from "./providers/ThemeProvider/ThemeProvider";

export default {
    created() {
        useThemeProvider();
    },
};
</script>
