import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import TeamMember from './TeamMember.vue'
import InfoSection from './InfoSection.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('TeamMember', TeamMember)
    app.component('InfoSection', InfoSection)
  }
} as Theme