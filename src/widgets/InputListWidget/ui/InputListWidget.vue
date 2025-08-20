<script setup lang="ts">
import SecondaryButton from "@/shared/ui/Button/variants/SecondaryButton.vue";
import PrimaryInput from "@/shared/ui/Input/index.ts";
import ChevronLeftIcon from "vue-material-design-icons/ChevronLeft.vue";
import MagnifyIcon from "vue-material-design-icons/Magnify.vue";
import { ref, nextTick, onMounted, onBeforeUnmount, computed } from "vue";
import type { InputListItemType } from "../types/InputListItemType";
import InputListItem from "./components/InputListItem.vue";
import InputListItemSkeleton from "./components/InputListItemSkeleton.vue";

const props = defineProps<{
    modelValue: string;
    items: InputListItemType[];
    placeholder?: string;
    label?: string;

    disabled?: boolean;
}>();

const emit = defineEmits<{
    (e: "update:model-value", value: string): void;
}>();

const opened = ref(false);
const inputValue = ref(props.modelValue);
const inputs = ref<InstanceType<typeof PrimaryInput>>();

const filteredItems = computed(() => {
    if (!inputValue.value) return props.items;
    return props.items.filter((item) =>
        item.label.toLowerCase().includes(inputValue.value.toLowerCase())
    );
});

function open() {
    opened.value = true;
    inputValue.value = props.modelValue;
    history.pushState({ isInputListOpened: true }, "");
    nextTick(() => {
        inputs.value?.focus();
    });
}

function close() {
    opened.value = false;
}

function handleBack() {
    if (opened.value) {
        opened.value = false;
        history.pushState(null, "");
    } else {
        history.back();
    }
}

function select(item: InputListItemType) {
    inputValue.value = item.label;
    emit("update:model-value", item.label);
    close();
}

onMounted(() => {
    window.addEventListener("popstate", handleBack);
});

onBeforeUnmount(() => {
    window.removeEventListener("popstate", handleBack);
});

defineExpose({
    open,
});
</script>

<template>
    <div>
        <div class="font-semibold pb-1" v-if="props.label">
            {{ props.label }}
        </div>
        <SecondaryButton
            :disabled="disabled"
            @click="!disabled ? open() : ''"
            class="w-full flex justify-start"
            :class="[
                props.modelValue === '' ? 'text-text-200' : '',
                disabled ? '!cursor-default' : '!cursor-text',
            ]">
            {{ props.modelValue === "" ? props.placeholder : props.modelValue }}
        </SecondaryButton>
    </div>

    <div
        v-if="opened"
        class="absolute z-1 min-w-full min-h-screen left-0 top-0 !m-0 bg-background">
        <div class="h-12 w-full border-b-2 border-b-secondary-100 wrapper-base">
            <div class="flex items-center justify-between w-full">
                <SecondaryButton
                    class="border-none min-h-fit !p-1"
                    @click="close">
                    <ChevronLeftIcon />
                </SecondaryButton>
                <div class="font-medium text-lg w-full text-center mr-8">
                    {{ label }}
                </div>
            </div>
        </div>

        <div class="wrapper-base mt-5">
            <div class="w-full flex flex-col space-y-5">
                <div class="bg-primary-100 p-2 rounded-lg">
                    <PrimaryInput
                        ref="inputs"
                        :placeholder="props.placeholder"
                        v-model="inputValue">
                        <template #icon>
                            <MagnifyIcon class="mr-2" />
                        </template>
                    </PrimaryInput>
                </div>

                <div class="flex flex-col space-y-3">
                    <div
                        v-if="props.items.length === 0"
                        class="flex flex-col space-y-3">
                        <InputListItemSkeleton />
                        <InputListItemSkeleton />
                        <InputListItemSkeleton />
                    </div>

                    <InputListItem
                        v-for="item in filteredItems"
                        :item="item"
                        @click="select(item)" />
                </div>
            </div>
        </div>
    </div>
</template>
