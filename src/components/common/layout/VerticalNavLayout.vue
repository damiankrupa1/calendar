<template>
  <VCard>
    <VLayout>
      <VAppBar
        color="primary"
        prominent
      >
        <VAppBarNavIcon variant="text" @click.stop="drawer = !drawer"></VAppBarNavIcon>

        <VToolbarTitle>My files</VToolbarTitle>

        <VSpacer></VSpacer>

        <template v-if="$vuetify.display.mdAndUp">
          <VBtn icon="mdi-magnify" variant="text"></VBtn>

          <VBtn icon="mdi-filter" variant="text"></VBtn>
        </template>

        <VBtn icon="mdi-dots-vertical" variant="text"></VBtn>
      </VAppBar>

      <VNavigationDrawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <VList
          :items="items"
        ></VList>
      </VNavigationDrawer>

      <VMain style="height: 500px;">
        <slot />
      </VMain>
    </VLayout>
  </VCard>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'

const items =  ref([
  {
    title: 'Foo',
    value: 'foo',
  },
  {
    title: 'Bar',
    value: 'bar',
  },
  {
    title: 'Fizz',
    value: 'fizz',
  },
  {
    title: 'Buzz',
    value: 'buzz',
  },
]);
const group = ref(null);
const drawer = ref(false);

watch(group, () => {
  drawer.value = false
})
</script>
