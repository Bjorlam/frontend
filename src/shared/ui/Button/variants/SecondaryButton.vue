<template>
    <button class="border-2 flex justify-center items-center border-secondary-100 p-2 rounded-lg min-h-11 text-text-100" :class="[disabled ? '' : 'cursor-pointer active:bg-secondary-100/50']">
        <slot></slot>
    </button>
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
