<script setup lang="ts">
import ChevronRightIcon from "vue-material-design-icons/ChevronRight.vue";
import AccountOutlineIcon from "vue-material-design-icons/AccountOutline.vue";
import CalendarMonthOutlineIcon from "vue-material-design-icons/CalendarMonthOutline.vue";
import { SecondaryButton } from "@/shared/ui/Button";
</script>
<template>
    <div class="relative overflow-hidden bg-primary-100 p-4 rounded-2xl flex flex-col">
        <div class="animate-loading blur-xl absolute top-[-100px] left-[-170px] h-[500px] w-6 rotate-45 bg-secondary-300 z-0"></div>
        <div class="flex justify-between items-center *:w-36 *:h-7 *:bg-secondary-100 *:rounded">
            <div></div>
            <div class="!w-16 !h-6"></div>
            <div></div>
        </div>
        <div class="flex space-x-3 mt-3 *:w-20 h-6 *:bg-secondary-100 *:rounded">
            <div></div>
            <div></div>
        </div>
        <SecondaryButton class="w-full mt-2 min-h-fit h-9 !p-0 border-none bg-secondary-100" :disabled="true"></SecondaryButton>
    </div>
</template>
