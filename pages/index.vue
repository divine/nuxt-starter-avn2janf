<template>
  <div class="container">
    <p>
      Using config `this.$nuxtI18nHead({ addSeoAttributes: { canonicalQueries:
      ['myParam'] } })`
    </p>
    <pre v-for="t of headTags">{{ t }}</pre>
  </div>
</template>

<script>
export default {
  head() {
    return this.$nuxtI18nHead({
      addSeoAttributes: {
        canonicalQueries: ['foo']
      }
    })
  },
  data() {
    return {
      headTags: [],
    };
  },
  mounted() {
    // extract tags from head
    this.headTags = Array.from(
      document.querySelectorAll('head link[data-hid^="i18n-')
    ).map((x) => ({ rel: x.rel, href: x.href, hreflang: x.hreflang }));
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 1em;
}

pre {
  display: block;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
