module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Lumina',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Lumina Project' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'favicon.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins: [
    { src: '~plugins/plugins.js', ssr: false }
  ],
  build: {
    /*
    ** Run ESLINT on save
    */
    vendor: ['vue-scrollto', 'vue-parallaxy'],
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
