<script setup lang="ts"></script>

<template>
    <component
        v-if="opened && popupConfig"
        :is="popupConfig.component"
        v-bind="popupConfig.props"
        v-on="popupConfig.listeners"
        @close="close" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { registerPopup } from "../api/PopupWidgetEmptyPopupInstance";
import type { EmptyPopupConfig } from "../types/PopupWidgetEmptyPopupType";

export default defineComponent({
    data() {
        return {
            opened: false,
            popupConfig: undefined as unknown as EmptyPopupConfig | undefined,
        };
    },
    emits: ["open", "close"],
    mounted() {
        registerPopup("empty", { open: this.open });
    },
    methods: {
        open(config: EmptyPopupConfig) {
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
