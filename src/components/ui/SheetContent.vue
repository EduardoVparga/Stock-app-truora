<template>
    <div :class="cn('p-6', props.class)"> 
      <slot />
    </div>
  </template>
  <script setup lang="ts">
  import { cn } from '@/lib/utils';
  const props = defineProps<{ class?: string }>();
  </script>