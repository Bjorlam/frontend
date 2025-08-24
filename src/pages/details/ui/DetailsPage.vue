<script setup lang="ts">
import { PersonInfoWidget } from "@/widgets/PersonInfoWidget";
import { TripInfoWidget } from "@/widgets/TripInfoWidget";
</script>

<template>
    <div class="wrapper-base wrapper-922">
        <div class="w-full flex flex-col space-y-5">
            <TripInfoWidget :tripInfo="tripInfo" />
            <PersonInfoWidget
                v-for="person in routeParams.person"
                :key="person" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getTicket } from "@/shared/api/API/ticket/ticket";
import {
    fromRouteParams,
    type RouterDetailsType,
} from "@/app/router/types/RouterDetailsType";
import type { TicketType } from "@/shared/api/API/ticket/types";
import { getTrip } from "@/shared/api/API/trip/trip";
import type { TripType } from "@/shared/api/API/trip/tripType";
import { createPopup } from "@/widgets/PopupWidget/api/PopupWidgetApi";

export default defineComponent({
    data() {
        return {
            tripInfo: undefined as unknown as TripType,
            routeParams: undefined as unknown as RouterDetailsType,
            addresses: {
                depStation: undefined as unknown as String,
                arrStation: undefined as unknown as String,
            },
        };
    },
    created() {
        this.routeParams = fromRouteParams(this.$route.params);
        this.loadTicketInfo();
    },
    methods: {
        loadTicketInfo() {
            getTicket(this.routeParams.scheduleId)
                .then((ticketInfo) => {
                    this.loadTripInfo(ticketInfo);
                })

                .catch(() => {
                    createPopup("error")
                        .init({
                            title: "Рейс не найден",
                            content:
                                "К сожалению, по указанным данным рейс отсутствует в системе. Проверьте корректность введённой информации или уточните параметры поиска.",
                            buttonLabel: "На главную",
                            buttonClick: () => {
                                this.$router.push({ name: "home" });
                            },
                        })
                        .show();
                });
        },
        loadTripInfo(ticketInfo: TicketType) {
            getTrip(ticketInfo.orderid, ticketInfo.uuid).then((tripInfo) => {
                this.tripInfo = tripInfo;
            });
        },
    },
});
</script>
