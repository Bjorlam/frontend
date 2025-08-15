<script setup lang="js">
import { PrimaryButtonWidget } from '@/widgets/ButtonWidget';
import PinOutlineIcon from 'vue-material-design-icons/PinOutline.vue';
import DefaultRadioGroup from '@/shared/ui/RadioGroup';
import PrimaryInput from '@/shared/ui/Input';
</script>

<template>
    <div class="bg-primary-100 p-4 rounded-2xl">
        <div class="flex">
            <PinOutlineIcon class="pr-2" />
            <div class="font-bold">Детали поездки</div>
        </div>
        <div class="mt-5 flex w-full flex-col">
            <div class="[&>*+*]:mt-4">
                <PrimaryInput placeholder="Ростов-На-Дону">Откуда</PrimaryInput>
                <PrimaryInput placeholder="Краснодар">Куда</PrimaryInput>

                <div>
                    <DefaultRadioGroup
                        :options="[
                            { label: 'Один', value: 1 },
                            { label: 'Два', value: 2 },
                            { label: 'Три', value: 3 },
                            { label: 'Четыре', value: 4 },
                        ]"
                        v-model="selectedPassengerType"
                        >Пассажиры</DefaultRadioGroup
                    >
                </div>
                <PrimaryInput placeholder="15.08.2025" value="15.08.2025">Дата</PrimaryInput>
            </div>
            <PrimaryButtonWidget class="mt-4">Найти рейсы</PrimaryButtonWidget>
        </div>
    </div>
</template>

<script lang="js">
export default {
    data() {
        return {
            selectedPassengerType: 1, // Default value for the radio group
        };
    },
}
</script>
