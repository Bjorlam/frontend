<script setup lang="ts">
import PopupWidgetEmptyPopup from "../variants/EmptyPopup/ui/PopupWidgetEmptyPopup.vue";
import PopupWidgetErrorPopup from "../variants/ErrorPopup/ui/PopupWidgetErrorPopup.vue";
</script>

<template>
    <div
        v-show="opened"
        class="fixed z-2 min-w-full min-h-screen left-0 top-0 !m-0 bg-background/70 flex items-center">
        <div class="wrapper-base wrapper-900 mb-64 *:p-4">
            <PopupWidgetErrorPopup
                @open="opened = true"
                @close="opened = false" />

            <PopupWidgetEmptyPopup
                @open="opened = true"
                @close="opened = false" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            opened: false,
        };
    },
});
</script>
