<script setup lang="ts">
import EmoticonSadOutlineIcon from "vue-material-design-icons/EmoticonSadOutline.vue";
import CancelIcon from "vue-material-design-icons/Cancel.vue";
import PrimaryButton from "@/shared/ui/Button/variants/SecondaryButton.vue";
import { format } from "date-fns";

const props = defineProps<{
    nextDate?: Date;
}>();

const emit = defineEmits<{
    (e: "clicked"): void;
}>();

function handleClick() {
    emit("clicked");
}
</script>

<template>
    <div class="flex flex-col rounded-xl p-4">
        <div class="w-full flex flex-col items-center">
            <EmoticonSadOutlineIcon :size="100" />
            <div class="font-semibold text-2xl mt-4">Ничего не найдено</div>
        </div>
        <div class="w-full mt-5" v-if="nextDate">
            <div class="w-full font-medium">
                Ближайший рейс: {{ format(nextDate, "dd.MM.yyyy") }}
            </div>
            <PrimaryButton @click="handleClick" class="w-full"
                >Найти</PrimaryButton
            >
        </div>
    </div>
</template>
