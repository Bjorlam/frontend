<template>
    <div>
        <div class="font-semibold pb-1"><slot></slot></div>
        <div class="flex flex-wrap gap-3">
            <div v-for="option in options" :key="option.value" class="flex-1 border-2 text-center rounded-lg px-4 py-2 border-secondary-100 cursor-pointer" :class="option.value === modelValue ? 'bg-accent-100 text-text-reverse-100 border-accent-100' : ''" @click="select(option.value)">
                {{ option.label }}
            </div>
        </div>
    </div>
</template>

<script lang="js">
export default {
  name: "RadioGroup",
  props: {
    options: {
      type: Array,
      required: true,
      validator(value) {
        if (!Array.isArray(value)) return false;
        return value.every(opt => {
          const keys = Object.keys(opt);
          const validKeys = ["value", "label"];
          const hasRequired = "value" in opt && "label" in opt;
          const onlyValidKeys = keys.every(k => validKeys.includes(k));
          if (!hasRequired || !onlyValidKeys) {
            console.warn(
              "[RadioGroup] Each option must contain 'value', 'label'.",
              opt
            );
            return false;
          }
          return true;
        });
      }
    },
    modelValue: {
      type: String,
      required: true
    }
  },
  methods: {
    select(value) {
      this.$emit("update:modelValue", value);
      this.$emit("change", value);
    }
  }
};
</script>
