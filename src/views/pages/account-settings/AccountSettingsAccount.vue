<script lang="ts" setup>
import avatar1 from '@images/avatar-1.png'
import { ref } from 'vue';

const accountData = {
  avatarImg: avatar1,
  firstName: 'john',
  lastName: 'Doe',
  email: 'johnDoe@example.com',
  phone: '+1 (917) 543-9876',
  address: '123 Main St, New York, NY 10001',
}

const accountDataLocal = ref(structuredClone(accountData))

const resetForm = () => {
  accountDataLocal.value = structuredClone(accountData)
}

</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Account Details">

        <VDivider />

        <VCardText>
          <VForm class="mt-6">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="accountDataLocal.firstName"
                  label="First Name"
                  density="compact"
                  variant="outlined"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="accountDataLocal.lastName"
                  label="Last Name"
                  density="compact"
                  variant="outlined"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountDataLocal.email"
                  label="E-mail"
                  type="email"
                  density="compact"
                  variant="outlined"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountDataLocal.phone"
                  label="Phone Number"
                  density="compact"
                  variant="outlined"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountDataLocal.address"
                  label="Address"
                  density="compact"
                  variant="outlined"
                />
              </VCol>

              <VCol
                cols="12"
                class="d-flex flex-wrap gap-4"
              >
                <VBtn>Save changes</VBtn>

                <VBtn
                  color="secondary"
                  variant="outlined"
                  type="reset"
                  @click.prevent="resetForm"
                >
                  Reset
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
