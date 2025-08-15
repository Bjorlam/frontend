<template>
  <div>
    <div class="font-semibold pb-1">
      <slot></slot>
    </div>
    <div class="flex flex-wrap gap-3">
      <div v-for="option in options" :key="option.value"
           class="flex-1 border-2 text-center rounded-lg px-4 py-2 border-secondary-100 cursor-pointer"
           :class="option.value === modelValue ? 'bg-accent-100 text-text-reverse-100 border-accent-100' : ''"
           @click="select(option.value)">
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, type PropType} from "vue";
import type {RadioOptionType, RadioOptionValueType} from "@/shared/ui/RadioGroup";

export default defineComponent({
  name: "RadioGroup",
  props: {
    options: {
      type: Array as PropType<RadioOptionType[]>,
      required: true,
    },
    modelValue: {
      type: null as unknown as PropType<RadioOptionValueType>,
      required: true
    }
  },
  methods: {
    select(value: RadioOptionValueType) {
      this.$emit("update:modelValue", value);
      this.$emit("change", value);
    }
  }
});
</script>
