<template>
    <div class="">
        <div class="font-semibold pb-1"><slot></slot></div>
        <input class="outline-none w-full border-2 border-secondary-100 p-2 rounded-lg h-11 placeholder:text-text-200 focus:border-accent-100" :placeholder="placeholder" :value="value"></input>
    </div>
</template>

<script lang="js">
export default {
    props: {
        placeholder: {
            type: String
        },
        value: {
            type: String,
        }
    }
};
</script>