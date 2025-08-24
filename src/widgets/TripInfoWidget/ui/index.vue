<script setup lang="ts">
import BaseComponent from "../components/BaseComponent.vue";
import BaseSkeleton from "../components/skeletons/BaseSkeleton.vue";
</script>

<template>
    <BaseComponent v-if="tripInfo" :tripInfo="tripInfo" />
    <BaseSkeleton v-else />
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { TripType } from "@/shared/api/API/trip/tripType";

export default defineComponent({
    props: {
        tripInfo: {
            type: Object as PropType<TripType>,
            required: false,
        },
    },
});
</script>
