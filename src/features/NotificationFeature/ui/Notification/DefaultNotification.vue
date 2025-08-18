<script setup lang="ts">
import InformationIcon from 'vue-material-design-icons/Information.vue';
import {SecondaryButton} from "@/shared/ui/Button";
import WindowCloseIcon from 'vue-material-design-icons/WindowClose.vue';
</script>

<template>
  <div
      class="w-full p-2 rounded-lg bg-primary-100 border-2 border-secondary-100">

    <div class="w-full flex items-center">
      <InformationIcon class=" **:!fill-information "/>

      <div class="px-2 font-medium text-information">
        {{ title }}
      </div>

      <SecondaryButton class="border-none ml-auto !h-fit !p-1">
        <WindowCloseIcon/>
      </SecondaryButton>

    </div>
    <div class="mt-2 text-text-200">
      <div class="">
        {{ message }}
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    message: {
      required: true,
      type: String,
    }
  },
  data() {
    return {
      title: "Продажа билетов"
    }
  }
});
</script>
