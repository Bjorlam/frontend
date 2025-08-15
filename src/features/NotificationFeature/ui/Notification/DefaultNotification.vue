<script setup lang="ts">
import SecondaryButtonWidget from '@/shared/ui/Button/variants/SecondaryButtonWidget.vue';
import InformationIcon from 'vue-material-design-icons/Information.vue';
</script>

<template>
  <div
      class="flex-col w-full p-2 rounded-lg bg-white/70 text-text-reverse-100 flex justify-between rounded-l-none border-l-2 border-l-information">
    <InformationIcon class="px-2 [&>_svg]:fill-information"/>
    <div class="flex">
      <div class="text-information">
        {{ message }}
      </div>
    </div>
    <div>
      <SecondaryButtonWidget class="active:bg-secondary-200/60 hover:bg-secondary-200/60 !p-1 border"> Закрыть
      </SecondaryButtonWidget>
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
  }
});
</script>
