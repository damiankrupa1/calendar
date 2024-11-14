<script setup lang="ts">
import { useTheme } from 'vuetify'
import type { ThemeSwitcherTheme } from '@/types/types'
import { useCycleList } from '@vueuse/core';
import { watch } from 'vue';

const props = defineProps<{
  themes: ThemeSwitcherTheme[]
}>()

const { name: themeName, global: globalTheme } = useTheme()
const { state: currentThemeName, next: getNextThemeName } =
  useCycleList(props.themes.map(t => t.name), { initialValue: themeName })

const changeTheme = () => {
  globalTheme.name.value = getNextThemeName()
}

// Update icon if theme is changed from other sources
watch(() => globalTheme.name.value, val => {
  currentThemeName.value = val
})
</script>

<template>
  <VIcon class="mr-5" @click="changeTheme"  icon="mdi-theme-light-dark" />
</template>
