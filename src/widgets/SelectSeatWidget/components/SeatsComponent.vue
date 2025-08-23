<template>
    <div
        class="grid gap-2"
        :style="{
            gridTemplateColumns: `repeat(${rotate ? maxY : maxX}, 30px)`,
            gridTemplateRows: `repeat(${rotate ? maxX : maxY}, 30px)`,
        }">
        <div
            v-for="seat in normalizedSeats"
            class="text-sm flex font-medium items-center justify-center rounded-lg border-secondary-200"
            :class="
                seat.number == '0' ? 'bg-transparent border-none' : 'border-2'
            "
            :style="{
                gridColumnStart: seat.renderX + 1,
                gridRowStart: seat.renderY + 1,
            }">
            <span v-if="seat.number != '0'">{{ seat.number }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import type { Seat } from "@/shared/api/API/trip/tripType";
import { defineComponent, type PropType } from "vue";

export default defineComponent({
    props: {
        rotate: {
            type: Boolean,
            required: true,
        },
        seats: {
            type: Array as PropType<Seat[]>,
            required: true,
        },
    },
    computed: {
        maxX(): number {
            return Math.max(...this.seats.map((s) => s.x));
        },
        maxY(): number {
            return Math.max(...this.seats.map((s) => s.y));
        },
        normalizedSeats(): (Seat & { renderX: number; renderY: number })[] {
            return this.seats.map((s) => {
                if (this.rotate) {
                    // Поворот -90° (против часовой стрелки), слева направо
                    return {
                        ...s,
                        renderX: s.y - 1,
                        renderY: s.x - 1,
                    };
                } else {
                    // Оригинальная ориентация
                    return {
                        ...s,
                        renderX: this.maxX - s.x,
                        renderY: s.y - 1,
                    };
                }
            });
        },
    },
});
</script>
