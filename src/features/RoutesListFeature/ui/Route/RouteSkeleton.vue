<script setup lang="ts">
import { PrimaryButton, SecondaryButton } from "@/shared/ui/Button";
</script>

<template>
    <div class="relative bg-primary-100 p-4 rounded-2xl flex flex-col [&>*+*]:mt-5 overflow-hidden">
        <div class="animate-loading blur-xl absolute top-[-100px] left-[-170px] h-[500px] w-6 rotate-45 bg-secondary-300 z-0"></div>
        <div class="w-full flex items-center z-1 !mt-0">
            <div class="bg-secondary-100 rounded-lg w-[105px] h-[40px]"></div>

            <div class="rounded font-medium w-[41px] h-[24px] bg-secondary-100 flex-1 mx-4"></div>

            <div class="bg-secondary-100 rounded-lg w-[105px] h-[40px]"></div>
        </div>

        <div class="w-full z-1 flex justify-between !mt-2 *:bg-secondary-100 *:rounded *:w-[105px] *:h-[24px]">
            <div></div>
            <div></div>
        </div>
        <div class="flex justify-between z-1">
            <div class="items-end flex space-x-3 *:bg-secondary-100 *:w-[100px] *:h-[24px] *:rounded">
                <div></div>
                <div></div>
            </div>
            <div class="h-[36px] w-[70px] bg-secondary-100 rounded-lg"></div>
        </div>
        <div class="flex space-x-2 z-1">
            <PrimaryButton class="w-full bg-secondary-100" :disabled="true"></PrimaryButton>
            <SecondaryButton class="bg-secondary-100 border-none min-w-[103px]" :disabled="true"></SecondaryButton>
        </div>
    </div>
</template>
