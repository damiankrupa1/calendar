<template>
  <VApp>
    <VMain>
      <VCard>
        <VTabs
          v-model="tab"
          bg-color="primary"
        >
          <VTab value="one">Item One</VTab>
          <VTab value="two">Item Two</VTab>
          <VTab value="three">Item </VTab>
        </VTabs>

        <VCardText>
          <VTabsWindow v-model="tab">
            <VTabsWindowItem value="one">
              One
            </VTabsWindowItem>

            <VTabsWindowItem value="two">
              Two
            </VTabsWindowItem>

            <VTabsWindowItem value="three">
              Three
            </VTabsWindowItem>
          </VTabsWindow>
        </VCardText>
      </VCard>
      <RouterView />
    </VMain>
  </VApp>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VTab } from 'vuetify/components';

  const tab = ref('date')

</script>
