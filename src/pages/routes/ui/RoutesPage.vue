<script setup lang="ts">
import RouteListFeature from "@/features/RoutesListFeature";
import { fromRouteParams, type RouterRoutesType } from "@/app/router/types/RouterRoutesType.ts";
import SearchInfoWidget from "@/widgets/RouteInfoWidget/index.ts";

const props = defineProps<{
    cityDepartureId: string;
    cityArrivalId: string;
    date: string;
    person: string;
}>();

const routerParams: RouterRoutesType = fromRouteParams(props);
</script>

<template>
    <div class="wrapper-base wrapper-922">
        <div class="w-full">
            <SearchInfoWidget :searchParams="routerParams" class="my-10" />

            <RouteListFeature :searchParams="routerParams" />
        </div>
    </div>
</template>
