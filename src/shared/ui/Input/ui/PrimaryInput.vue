<template>
    <div>
        <div class="font-semibold pb-1" v-if="label">{{ label }}</div>
        <div class="relative">
            <div
                class="flex items-center border-2 border-secondary-100 rounded-lg h-11 px-2"
                :class="[
                    disabled
                        ? 'bg-secondary-100/40 text-text-200/50'
                        : 'focus-within:border-accent-100',
                ]">
                <div class="mr-2 flex items-center">
                    <slot name="icon" />
                </div>
                <input
                    ref="input"
                    class="outline-none w-full placeholder:text-text-200 bg-transparent"
                    :placeholder="placeholder"
                    :value="modelValue"
                    @input="onInput"
                    :disabled="disabled" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "InnerComponent",
    props: {
        modelValue: { type: String, required: true },
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
