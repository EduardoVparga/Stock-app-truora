<template>
    <div :class="cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6', props.class)"> 
      <slot />
    </div>
  </template>
  <script setup lang="ts">
  import { cn } from '@/lib/utils';
  const props = defineProps<{ class?: string }>();
  </script>