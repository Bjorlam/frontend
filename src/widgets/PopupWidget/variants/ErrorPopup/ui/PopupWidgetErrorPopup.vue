<script setup lang="ts">
import AlertCircleOutlineIcon from "vue-material-design-icons/AlertCircleOutline.vue";
import ArrowLeftIcon from "vue-material-design-icons/ArrowLeft.vue";
import { SecondaryButton } from "@/shared/ui/Button";
</script>

<template>
    <div
        v-if="opened && popupConfig"
        class="bg-primary-100 rounded-xl w-full flex flex-col space-y-2">
        <div class="font-medium text-error/80 flex items-center">
            <AlertCircleOutlineIcon class="**:fill-error/80 mr-2" />
            <div>Ошибка: {{ popupConfig.title }}</div>
        </div>
        <div>{{ popupConfig.content }}</div>
        <SecondaryButton
            class="w-full min-h-fit py-1"
            @click="
                () => {
                    if (popupConfig) popupConfig.buttonClick();
                    close();
                }
            ">
            <div class="flex w-full justify-center">
                <ArrowLeftIcon class="**:fill-secondary-300" />
                <div class="w-full mr-6">{{ popupConfig.buttonLabel }}</div>
            </div>
        </SecondaryButton>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { registerPopup } from "../api/PopupWidgetErrorPopupInstance";
import type { ErrorPopupConfig } from "../types/PopupWidgetErrorPopupType";

export default defineComponent({
    data() {
        return {
            opened: false,
            popupConfig: undefined as unknown as ErrorPopupConfig | undefined,
        };
    },
    emits: ["open", "close"],
    mounted() {
        registerPopup("error", { open: this.open });
    },
    methods: {
        open(config: ErrorPopupConfig) {
            this.opened = true;
            this.$emit("open");
            this.popupConfig = config;
        },

        close() {
            this.opened = false;
            this.$emit("close");
            this.popupConfig = undefined;
        },
    },
});
</script>
