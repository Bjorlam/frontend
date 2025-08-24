<script setup lang="ts">
import ChevronRightIcon from "vue-material-design-icons/ChevronRight.vue";
import AddressesSkeleton from "./skeletons/AddressesSkeleton.vue";
</script>

<template>
    <div class="bg-primary-100 p-4 rounded-2xl flex flex-col">
        <div class="flex justify-between items-center font-medium text-lg">
            <div>{{ tripInfo.depCity }}</div>
            <div class="flex items-center">
                <div class="border-t-2 w-12 mr-[-14px]"></div>
                <ChevronRightIcon />
            </div>
            <div>{{ tripInfo.arrCity }}</div>
        </div>
        <div
            v-if="addresses.arrStation && addresses.depStation"
            class="flex justify-between text-sm text-text-200">
            <div class="link" @click="openMap(tripInfo.depStation)">
                {{ addresses.depStation }}
            </div>
            <div class="text-right link" @click="openMap(tripInfo.arrStation)">
                {{ addresses.arrStation }}
            </div>
        </div>
        <AddressesSkeleton v-else />
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { TripType } from "@/shared/api/API/trip/tripType";
import type { Addressestype } from "../types/AddressesType";
import { getAddress } from "@/shared/api/OSMApi/getAddress/getAddress";
import { clearAddress } from "@/shared/api/FormatAddress/clearAddress";
import { createFromOSM } from "@/shared/api/FormatAddress/createFromOSM";
import { openMap } from "@/shared/api/utils/openMap";

export default defineComponent({
    props: {
        tripInfo: {
            type: Object as PropType<TripType>,
            required: true,
        },
    },
    data() {
        return {
            addresses: {} as unknown as Addressestype,
        };
    },
    created() {
        this.loadAddresses(this.tripInfo);
    },
    methods: {
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
