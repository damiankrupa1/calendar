<template>
  <VApp>
    <VMain>
      <RouterView />
    </VMain>
  </VApp>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

  const tab = ref('date')

</script>
