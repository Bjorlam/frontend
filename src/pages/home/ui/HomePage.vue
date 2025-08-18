<script setup lang="ts">
import SearchWidget from "@/widgets/SearchWidget";
</script>

<template>
    <div class="wrapper-base wrapper-922">
        <div class="w-full">
            <div class="w-full flex justify-center py-20">
                <div class="text-3xl archivo-black">Search bus tickets</div>
            </div>
            <SearchWidget :cityDepartureName="cityDepartureName" :cityArrivalName="cityArrivalName" :person="person" :date="date" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { parse } from "date-fns";
export default defineComponent({
    data() {
        return {
            cityDepartureName: null as unknown as string | null,
            cityArrivalName: null as unknown as string | null,
            person: null as unknown as number | null,
            date: null as unknown as Date | null,
        };
    },
    created() {
        this.cityDepartureName = this.$route.query.cityDepartureName != null ? String(this.$route.query.cityDepartureName) : null;
        this.cityArrivalName = this.$route.query.cityArrivalName != null ? String(this.$route.query.cityArrivalName) : null;

        this.person = this.$route.query.person != null ? Number(this.$route.query.person) : null;

        this.date = this.$route.query.date != null ? parse(String(this.$route.query.date), "dd.MM.yyyy", new Date()) : null;
    },
});
</script>
