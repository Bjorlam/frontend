<template>
    <div>
        <div class="font-semibold pb-1" v-if="label">{{ label }}</div>
        <input ref="input" class="outline-none w-full border-2 border-secondary-100 p-2 rounded-lg h-11 placeholder:text-text-200" :placeholder="placeholder" :value="modelValue" @input="onInput" :disabled="disabled" :class="[disabled ? 'bg-secondary-100/40 placeholder:text-text-200/50 text-text-200/50' : 'focus:border-accent-100']" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "InnerComponent",
    props: {
        modelValue: {
            type: String,
            required: true,
        },
        placeholder: String,
        label: String,
        disabled: Boolean,
    },
    emits: ["update:model-value"],
    methods: {
        onInput(e: Event) {
            const target = e.target as HTMLInputElement;
            this.$emit("update:model-value", target.value);
        },
        focus() {
            (this.$refs.input as HTMLInputElement)?.focus();
        },
    },
});
</script>
