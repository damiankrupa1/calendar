<script lang="ts" setup>
import { inject, ref } from 'vue';
import { VTextField } from 'vuetify/lib/components/index.mjs';

const dayJS = inject("dayJS")

const eventData = {
  title: '',
  startDate: '',
  endDate: null,
}

const menu = ref(false)
const tab = ref('date')
const date = ref(null)
const time = ref(null)

const accountDataLocal = ref(eventData)

const onChange = (value) => {
  accountDataLocal.value.startDate = dayJS(value).format("YYYY-MM-DD")
  date.value = value
  tab.value = 'time'
}

const onChangeTime = (value) => {
  console.log(value)
}

</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Event details">
        <VCardText>
          <VForm class="mt-6">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="accountDataLocal.title"
                  label="Title"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="accountDataLocal.title"
                  label="Name"
                />
              </VCol>
            </VRow>
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
              <VMenu
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
              >
                <template v-slot:activator="{ props }">
                  <VTextField
                    v-bind="props"
                    :model-value="accountDataLocal.startDate"
                    variant="outlined"
                    append-inner-icon="mdi-calendar"
                    label="Select start date"
                  />
                </template>
                <VCard>
                  <VTabs v-model="tab">
                    <VTab value="date">
                      Date
                    </VTab>
                    <VTab value="time">
                      Time
                    </VTab>
                  </VTabs>
                  <VCardText>
                    <VTabsWindow v-model="tab">
                      <VTabsWindowItem value="date">
                        date
                        <VDatePicker
                          :model-value="date"
                          @update:modelValue="onChange"
                        />
                      </VTabsWindowItem>
                      <VTabsWindowItem value="time">
                        time
                        <VTimePicker
                          v-model="time"
                          format="24hr"
                          class="rounded-0"
                          full-width
                        />
                      </VTabsWindowItem>
                    </VTabsWindow>
                  </VCardText>
                </VCard>
              </VMenu>
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="accountDataLocal.title"
                  label="Name"
                />
              </VCol>
            </VRow>
            <VRow>
              <VCol
                cols="12"
                class="d-flex flex-wrap gap-4"
              >
                <VBtn>Save</VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
