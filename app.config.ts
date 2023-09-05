export default defineAppConfig({
  docus: {
    title: '新旦智能',
    description: 'The best place to start your documentation.11',
    url: 'http://docus.dev',
    titleTemplate: '新旦智能',
    socials: {
      twitter: 'nuxt_js',
      github: 'nuxt-themes/docus',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      }
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      title: "新旦智能",
      logo: true,
      exclude: [],
      showLinkIcon: true,
      fluid: true
    }
  }
})
