import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { VBtn } from 'vuetify/components/VBtn'

import { createVuetify } from 'vuetify'

export default createVuetify({
  aliases: {
    IconBtn: VBtn,
  },
  theme: {
    defaultTheme: 'dark',
  },
})
