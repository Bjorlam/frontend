<template>
    <div
        class="flex justify-center items-center min-h-11 rounded-lg p-2 bg-accent-100 text-text-reverse-100 font-semibold"
        :class="[
            disabled
                ? 'bg-accent-100/50'
                : 'active:bg-accent-100/85 cursor-pointer',
        ]">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    props: {
        disabled: {
            required: false,
            type: Boolean,
            default: false,
        },
    },
});
</script>
