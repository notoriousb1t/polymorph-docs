import { defaultTheme } from '@vuepress/theme-default'

export default { 
  title: "Polymorph",
  theme: defaultTheme({
    navbar: [

      { text: "About", link: "/about.md" },
      { text: "Setup", link: "/setup.md" },
      { text: "API Reference", link: "/api.md" }
    ],
  }),
  description: "Get Your SVG into Shape!",
  base: "/polymorph-docs/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
}