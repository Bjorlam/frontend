<script setup lang="ts">
import { PersonInfoWidget } from "@/widgets/PersonInfoWidget";
import ChevronRightIcon from "vue-material-design-icons/ChevronRight.vue";
</script>

<template>
    <div class="wrapper-base wrapper-922">
        <div class="w-full flex flex-col space-y-5">
            <div
                v-if="tripInfo"
                class="bg-primary-100 p-4 rounded-2xl flex flex-col">
                <div
                    class="flex justify-between items-center font-medium text-lg">
                    <div>{{ tripInfo.depCity }}</div>
                    <div class="flex items-center">
                        <div class="border-t-2 w-6 mr-[-14px]"></div>
                        <ChevronRightIcon />
                    </div>
                    <div>{{ tripInfo.arrCity }}</div>
                </div>
                <div
                    v-if="addresses.depStation && addresses.arrStation"
                    class="flex justify-between text-sm text-text-200">
                    <div class="link">
                        {{ addresses.depStation }}
                    </div>
                    <div class="text-right link">
                        {{ addresses.arrStation }}
                    </div>
                </div>
            </div>
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
import { clearAddress } from "@/shared/api/FormatAddress/clearAddress";
import { createFromOSM } from "@/shared/api/FormatAddress/createFromOSM";
import { getAddress } from "@/shared/api/OSMApi/getAddress/getAddress";

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
                this.loadAddresses(tripInfo);
            });
        },
        loadAddresses(tripInfo: TripType) {
            getAddress(clearAddress(tripInfo.depStation))
                .then((address) => {
                    this.addresses.depStation = address
                        ? createFromOSM(address)
                        : tripInfo.depStation;
                })
                .catch(() => {
                    this.addresses.depStation = tripInfo.depStation;
                });

            getAddress(clearAddress(tripInfo.arrStation))
                .then((address) => {
                    this.addresses.arrStation = address
                        ? createFromOSM(address)
                        : tripInfo.arrStation;
                })
                .catch(() => {
                    this.addresses.arrStation = tripInfo.arrStation;
                });
        },
    },
});
</script>
