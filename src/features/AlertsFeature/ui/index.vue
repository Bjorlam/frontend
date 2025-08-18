<template>
    <div class="fixed wrapper-base wrapper-922 bottom-5 z-50">
        <div class="w-full flex flex-col [&>*+*]:mt-2">
            <component v-for="alert in alerts" :key="alert.id" :is="alertComponents[alert.type]" :title="alert.title" :message="alert.message" @close="onAlertClose(alert.id)" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, markRaw } from "vue";
import { getAlertsStore, removeAlert } from "@/entities/AlertsEntity/api/AlertsEntityApi";
import type { Alert } from "@/entities/AlertsEntity/model/AlertsEntityStore";

import InformationAlert from "./Alert/InformationAlert.vue";

export default defineComponent({
    name: "AlertsList",
    components: {
        InformationAlert,
    },
    data() {
        return {
            store: getAlertsStore(),
            alertComponents: {
                info: markRaw(InformationAlert),
            } as Record<string, any>,
        };
    },
    computed: {
        alerts(): Alert[] {
            return this.store.getAlerts;
        },
    },
    methods: {
        onAlertClose(id: string) {
            removeAlert(id);
        },
    },
});
</script>
