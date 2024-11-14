/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import { axiosInstance } from '@/plugins/axios';
import { pinia } from '@/plugins/pinia';
import { router } from "@/plugins/router/index";
import { useUserSessionStore } from '@/store/userSession';
import { useNotification } from "@kyvg/vue3-notification";
import dayjs from 'dayjs';

// Composables
import { createApp } from 'vue'

const { notify }  = useNotification();

const app = createApp(App)

app.provide('dayJS', dayjs)

registerPlugins(app)

app.mount('#app')

const userSession = useUserSessionStore(pinia)

router.beforeEach(async (to,_,next) => {

  if (!userSession.isAuthenticated() && to.meta.auth) {
    next({name: 'login'})
    return
  }
  if(to.name === 'login' && userSession.isAuthenticated()){
    next({name:'dashboard'})
    return
  }
  if(to.meta.auth === false && userSession.isAuthenticated()){
    next({name: 'dashboard'})
    return
  }
  next()
})

axiosInstance.interceptors.response.use(
  response => {
    if(response.config.method?.toLowerCase() === 'get'){
      return response;
    }
    notify({
      title: "Success",
      type: "success"
    })
    return response;
  },
  error => {

    notify({
      title: "Error!",
      text: error.message,
      type: "error"
    })
    if (error.response) {
      if (error.response.status === 401) {
        userSession.logout();
        router.push({name: 'login'})
      }
    }
    return Promise.reject(error);
  }
);
