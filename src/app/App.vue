<script setup lang="ts">
import HeaderWidget from "@/widgets/HeaderWidget";
import Index from "@/features/NotificationFeature/inedx"
</script>

<template>
  <div class="wrapper-base wrapper-922">
    <HeaderWidget class="w-full mt-5"/>
  </div>

  <div>
    <RouterView/>
  </div>
  <div>
    <Index/>
  </div>
</template>

<script lang="ts">
import {useThemeProvider} from "./providers/ThemeProvider/ThemeProvider";
import {defineComponent} from "vue";

export default defineComponent({
  async mounted() {
    await useThemeProvider()
  }
});
</script>
