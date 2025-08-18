<script setup lang="ts">
import ChevronRightIcon from "vue-material-design-icons/ChevronRight.vue";
import AccountOutlineIcon from "vue-material-design-icons/AccountOutline.vue";
import CalendarMonthOutlineIcon from "vue-material-design-icons/CalendarMonthOutline.vue";
import { SecondaryButton } from "@/shared/ui/Button";
import OpenInNewIcon from "vue-material-design-icons/OpenInNew.vue";
</script>
<template>
    <div class="bg-primary-100 p-4 rounded-2xl flex flex-col">
        <div class="flex justify-between items-center font-medium text-lg">
            <div>Новошахтинск</div>
            <div class="flex items-center">
                <div class="border-t-2 w-6 mr-[-14px]"></div>
                <ChevronRightIcon />
            </div>
            <div>Ростов-На-Дону</div>
        </div>
        <div class="flex space-x-3 font-medium mt-3 *:flex *:space-x-1 *:items-center [&>*>div]:mb-[-3px]">
            <div>
                <AccountOutlineIcon />
                <div>4 Пассажира</div>
            </div>
            <div>
                <CalendarMonthOutlineIcon />
                <div>28.10.2025</div>
            </div>
        </div>
        <SecondaryButton class="w-full mt-2 min-h-fit h-fit !py-1" @click="$router.push({ name: 'home' })">
            <div class="flex w-full justify-center">
                <div class="w-full">Изменить</div>
                <OpenInNewIcon class="**:fill-secondary-300" />
            </div>
        </SecondaryButton>
    </div>
</template>
