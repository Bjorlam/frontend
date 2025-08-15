<script setup lang="ts">
import HeaderWidget from "@/widgets/HeaderWidget";
</script>

<template>
  <div class="wrapper-base wrapper-922">
    <HeaderWidget class="w-full mt-5"/>
  </div>

  <div>
    <RouterView/>
  </div>
  <!-- <div>
      <NotificationFeature />
  </div> -->
</template>

<script lang="ts">
import {useThemeProvider} from "./providers/ThemeProvider/ThemeProvider";

export default {
  created() {
    useThemeProvider();
  },
};
</script>
