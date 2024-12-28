import { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./custom.css";
import TeamMember from "./TeamMember.vue";
import InfoSection from "./InfoSection.vue";
import Comparison from "./Comparison.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("TeamMember", TeamMember);
    app.component("InfoSection", InfoSection);
    app.component("Comparison", Comparison);
  },
} as Theme;
