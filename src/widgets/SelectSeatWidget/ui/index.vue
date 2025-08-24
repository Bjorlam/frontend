<script setup lang="ts">
import SeatPassengerIcon from "vue-material-design-icons/SeatPassenger.vue";
import SeatsComponent from "../components/SeatsComponent.vue";
import SteeringIcon from "vue-material-design-icons/Steering.vue";
</script>

<template>
    <div class="bg-primary-100 p-4 rounded-2xl flex flex-col space-y-2">
        <div class="flex items-center space-x-2">
            <SeatPassengerIcon />
            <div class="font-medium">Выбор места</div>
        </div>
        <div class="text-text-200">
            Рассадка пассажиров в автобусе, может отличаться от схемы
            представленной на сайте.
        </div>
        <div class="flex justify-center w-full" ref="seatsContainer">
            <div
                ref="seats"
                class="border-2 border-secondary-100 rounded-lg flex p-4 w-fit"
                :class="[
                    overflow ? 'flex-col space-y-4' : 'flex-row space-x-4',
                ]">
                <SteeringIcon v-if="overflow" class="ml-3" :size="40" />

                <SeatsComponent :rotate="overflow" :seats="tripInfo.seats" />
                <SteeringIcon
                    v-if="!overflow"
                    class="*:rotate-90 mt-3"
                    :size="40" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, type PropType } from "vue";
import type { TripType } from "@/shared/api/API/trip/tripType";

export default defineComponent({
    props: {
        tripInfo: {
            type: Object as PropType<TripType>,
            required: true,
        },
        person: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            overflow: false,
        };
    },
    mounted() {
        nextTick(() => {
            this.checkOverflow();
            window.addEventListener("resize", this.checkOverflow);
        });
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.checkOverflow);
    },

    methods: {
        checkOverflow() {
            const seatsElement = this.$refs.seats as InstanceType<
                typeof HTMLElement
            >;
            let seatsWidth = seatsElement.scrollWidth;
            let seatsHeight = seatsElement.scrollHeight;

            let seatsContainerWidth = (
                this.$refs.seatsContainer as InstanceType<typeof HTMLElement>
            ).offsetWidth;

            if (!this.overflow) {
                if (seatsWidth >= seatsContainerWidth) {
                    this.overflow = true;
                    return;
                }

                return;
            }

            if (this.overflow) {
                if (seatsHeight < seatsContainerWidth) {
                    this.overflow = false;
                    return;
                }
                return;
            }
        },
    },
});
</script>
