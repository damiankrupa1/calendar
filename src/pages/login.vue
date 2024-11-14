<script setup lang="ts">
import { useUserSessionStore } from '@/store/userSession'
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import logoLux from '@images/logoLux.png'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import { computed, ref } from 'vue'

const form = ref({
  email: '',
  password: '',
  remember: false,
})

const userSession = useUserSessionStore()

const rules = {
  email: { required, email },
  password: { required },
}

const v$ = useVuelidate(rules, form.value)

const isPasswordVisible = ref(false)

const passwordErrors = computed(() => {
  const errors = v$.value.password.$errors;
  if(!Array.isArray(errors)){
    return [];
  }
  return errors.map(error => error.$message)
})
const emailErrors = computed(() => {
  const errors = v$.value.email.$errors;
  if(!Array.isArray(errors)){
    return [];
  }
  return errors.map(error => error.$message)
})

const handleSubmit = async () => {
  v$.value.$touch();
  if(v$.value.$invalid){
    return;
  }
  const send = {...form.value} as {email:string;password:string;remember?:boolean}
  delete send.remember
  await userSession.login(send)
}
</script>

<template>

  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <VImg :src="logoLux" />
          </div>
        </template>

        <VCardTitle class="font-weight-semibold text-2xl text-uppercase">
          LuxSoftware
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 font-weight-semibold mb-1">
          Welcome to LuxSoftware!
        </h5>
        <p class="mb-0">
          Please sign-in to your account and start the adventure
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                label="Email"
                type="email"
                :error-messages="emailErrors"
                @blur="v$.email.$touch"
                @input="v$.email.$touch"
              />
            </VCol>

            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                :error-messages="passwordErrors"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
                @blur="v$.password.$touch"
                @input="v$.password.$touch"
              />

              <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                <VCheckbox
                  v-model="form.remember"
                  label="Remember me"
                />

                <!-- <a
                  class="ms-2 mb-1"
                  href="javascript:void(0)"
                >
                  Forgot Password?
                </a> -->
              </div>

              <VBtn
                block
                type="submit"
              >
                Login
              </VBtn>
            </VCol>

            <VCol
              cols="12"
              class="text-center text-base"
            >
              <span>New on our platform?</span>
              <RouterLink
                class="text-primary ms-2"
                to="/register"
              >
                Create an account
              </RouterLink>
            </VCol>

          </VRow>
        </VForm>
      </VCardText>
    </VCard>

  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
