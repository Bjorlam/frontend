<script setup lang="ts">
import ChevronRightIcon from "vue-material-design-icons/ChevronRight.vue";
import AccountOutlineIcon from "vue-material-design-icons/AccountOutline.vue";
import CalendarMonthOutlineIcon from "vue-material-design-icons/CalendarMonthOutline.vue";
import { SecondaryButton } from "@/shared/ui/Button";
import ArrowLeftIcon from "vue-material-design-icons/ArrowLeft.vue";
</script>
<template>
    <div class="bg-primary-100 p-4 rounded-2xl flex flex-col">
        <div class="flex justify-between items-center font-medium text-lg">
            <div>{{ cityDepartureName }}</div>
            <div class="flex items-center">
                <div class="border-t-2 w-6 mr-[-14px]"></div>
                <ChevronRightIcon />
            </div>
            <div>{{ cityArrivalName }}</div>
        </div>
        <div class="flex space-x-3 font-medium mt-3 *:flex *:space-x-1 *:items-center [&>*>div]:mb-[-3px]">
            <div>
                <AccountOutlineIcon />
                <div>{{ person }} Пассажир{{ person !== 1 ? "а" : "" }}</div>
            </div>
            <div>
                <CalendarMonthOutlineIcon />
                <div>{{ format(date, "dd.MM.yyyy") }}</div>
            </div>
        </div>
        <SecondaryButton
            class="w-full mt-2 min-h-fit h-fit !py-1"
            @click="
                $router.push({
                    name: 'home',
                    query: toQueryParams(createRouterHomeQueryType(cityDepartureName, cityArrivalName, date, person)),
                })
            ">
            <div class="flex w-full justify-center">
                <ArrowLeftIcon class="**:fill-secondary-300" />
                <div class="w-full">Изменить</div>
            </div>
        </SecondaryButton>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createRouterHomeQueryType, type fromQueryParams, toQueryParams } from "@/app/router/types/RouterHomeQueryType";
import { format } from "date-fns";
export default defineComponent({
    props: {
        cityDepartureName: {
            type: String,
            required: true,
        },
        cityArrivalName: {
            type: String,
            required: true,
        },
        person: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
    },
});
</script>
