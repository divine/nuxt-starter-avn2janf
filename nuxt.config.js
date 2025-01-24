export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  ssr: true,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',

  modules: ['@nuxtjs/i18n'],

  head() {
    return this.$nuxtI18nHead({
      addSeoAttributes: { canonicalQueries: ['myParam'] },
    });
  },

  i18n: {
    baseUrl: 'http://localhost.com',
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US' },
      { code: 'nl', iso: 'nl-NL' },
    ],
  },
};
