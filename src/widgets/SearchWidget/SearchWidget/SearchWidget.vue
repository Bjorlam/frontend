<script setup lang="ts">
import {PrimaryButtonWidget} from '@/shared/ui/Button/index.js';
import PinOutlineIcon from 'vue-material-design-icons/PinOutline.vue';
import DefaultRadioGroup, {radioOption} from '@/shared/ui/RadioGroup';
import PrimaryInput from '@/shared/ui/Input';
</script>

<template>
  <div class="bg-primary-100 p-4 rounded-2xl">
    <div class="flex">
      <PinOutlineIcon class="pr-2"/>
      <div class="font-bold">Детали поездки</div>
    </div>
    <div class="mt-5 flex w-full flex-col">
      <div class="[&>*+*]:mt-4">
        <PrimaryInput placeholder="Ростов-На-Дону">Откуда</PrimaryInput>
        <PrimaryInput placeholder="Краснодар">Куда</PrimaryInput>

        <div>
          <DefaultRadioGroup
              :options="[
                            radioOption('1', 'Один'),
                            radioOption('2', 'Один'),
                            radioOption('3', 'Один'),
                            radioOption('4', 'Один'),
                        ]"
              v-model="selectedPassengerType"
          >Пассажиры
          </DefaultRadioGroup
          >
        </div>
        <PrimaryInput placeholder="15.08.2025" value="15.08.2025">Дата</PrimaryInput>
      </div>
      <PrimaryButtonWidget class="mt-4">Найти рейсы</PrimaryButtonWidget>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  data() {
    return {
      selectedPassengerType: 1,
    };
  },
})
</script>
