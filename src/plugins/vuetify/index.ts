import type { App } from 'vue'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import { VBtn } from 'vuetify/components/VBtn'
import * as directives from 'vuetify/directives'
import defaults from './defaults'
import { icons } from './icons'
import { themes } from './theme'

// Styles

import '@core/scss/template/libs/vuetify/index.scss'
import 'vuetify/styles'

export default function (app: App) {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    aliases: {
      IconBtn: VBtn,
    },
    defaults,
    icons,
    theme: {
      defaultTheme: 'light',
      themes,
    },
  })

  app.use(vuetify)
}
