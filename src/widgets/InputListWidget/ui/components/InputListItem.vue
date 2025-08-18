<template>
    <div class="bg-primary-100 p-2 rounded-lg cursor-pointer active:bg-secondary-100 flex flex-col">
        <div class="font-medium text-lg">{{ item.label }}</div>
        <div v-if="item.description" class="text-text-200">{{ item.description }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { InputListItemType } from "../../types/InputListItemType";

export default defineComponent({
    props: {
        item: {
            required: true,
            type: Object as PropType<InputListItemType>,
        },
    },
});
</script>
