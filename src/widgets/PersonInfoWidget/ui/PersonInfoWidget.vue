<script setup lang="ts">
import PrimaryInput from "@/shared/ui/Input";
import AccountOutlineIcon from "vue-material-design-icons/AccountOutline.vue";
</script>

<template>
    <div class="bg-primary-100 rounded-2xl p-4 flex flex-col space-y-2">
        <div class="flex space-x-2 items-center">
            <AccountOutlineIcon />
            <div class="font-medium mb-[-3px]">Информация о пассажире</div>
        </div>
        <div>
            <PrimaryInput v-model="name" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            name: "",
        };
    },
});
</script>
