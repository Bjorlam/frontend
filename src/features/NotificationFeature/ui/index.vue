<script setup lang="ts">
import DefaultNotification from './Notification/DefaultNotification.vue';
</script>

<template>
  <div class="absolute wrapper-base wrapper-922 top-5">
    <div class="w-full flex flex-col [&>*+*]:mt-2">
      <DefaultNotification message="Приобретение билетов возможно не позднее чем за 2 часа до отправления автобуса."/>
      <DefaultNotification message="Приобретение билетов возможно не позднее чем за 2 часа до отправления автобуса."/>

    </div>
  </div>
</template>