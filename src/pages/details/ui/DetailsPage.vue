<script setup lang="ts"></script>

<template></template>

<script lang="ts">
import { defineComponent } from "vue";
import { getTicket } from "@/shared/api/API/ticket/ticket";
import { fromRouteParams } from "@/app/router/types/RouterDetailsType";
import type { TicketType } from "@/shared/api/API/ticket/types";
import { getRouteInfo } from "@/shared/api/API/getPass/routeInfo";

export default defineComponent({
    data() {
        return {
            ticket: undefined as unknown as TicketType,
        };
    },
    created() {
        getTicket(fromRouteParams(this.$route.params).scheduleId).then(
            (data) => {
                getRouteInfo(data.orderid, data.uuid).then((datwa) => {
                    console.log(datwa);
                });
            }
        );
    },
});
</script>
