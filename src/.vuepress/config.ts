import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import plugins from './plugin.ts';


export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme,
  plugins:plugins
  // Enable it with pwa
  // shouldPrefetch: false,
});
