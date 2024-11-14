<template>
  <VCard>
    <VLayout>
      <VAppBar
        color="primary"
        prominent
      >
        <VAppBarNavIcon variant="text" @click.stop="drawer = !drawer"></VAppBarNavIcon>

        <VToolbarTitle>LuxSoftware</VToolbarTitle>

        <VSpacer></VSpacer>

        <NavbarThemeSwitcher />
        <UserProfile />
      </VAppBar>

      <VNavigationDrawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <VList>
          <VListItem v-for="item in items" :key="item.to">
            <VListItem :title="item.title" :to="item.to" variant="plain"/>
          </VListItem>
        </VList>
      </VNavigationDrawer>

      <VMain style="height: 100vh">
        <slot />
      </VMain>
    </VLayout>
  </VCard>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
import NavbarThemeSwitcher from '@/components/common/layout/NavbarThemeSwitcher.vue'
import UserProfile from '@/components/common/layout/UserProfile.vue'

const items =  ref([
  {
    title: 'Account Settings',
    icon: 'ri-user-settings-line',
    to: '/account-settings',
  },
  {
    title: 'Calendar',
    icon: 'ri-calendar-view',
    to: '/calendar',
  },
  {
    title: 'Calendar events',
    icon: 'ri-calendar-view',
    to: '/calendar-events',
  },
  {
    title: 'Login',
    icon: 'ri-login-box-line',
    to: '/login',
  },
  {
    title: 'Error',
    icon: 'ri-information-line',
    to: '/no-existence',
  },
  {
    title: 'Tables',
    icon: 'ri-table-alt-line',
    to: '/tables',
  },
]);
const group = ref(null);
const drawer = ref(false);

watch(group, () => {
  drawer.value = false
})
</script>
