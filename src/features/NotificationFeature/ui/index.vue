<script setup lang="js">
import DefaultNotification from './Notification/DefaultNotification.vue';
</script>

<template>
    <div class="absolute wrapper-base wrapper-922 bottom-5">
        <DefaultNotification :message="'Биелты можно приобрести не позже чем за 2 часа до отправления.'" />
    </div>
</template>
