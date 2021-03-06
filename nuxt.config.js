export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'San Quotes',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'X-UA-Compatible',
        content: 'IE=edge, chrome=1'
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Get Real-time Random Quotes from Different Quote Categories.' },
      {
        name: 'mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'application-name',
        content: 'San Quotes'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'white-translucent'
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'San Quotes'
      },
      {
        rel: 'shortcut icon',
        href: '/icons/Icon-32.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '48x48',
        href: '/icons/Icon-48.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/icons/Icon-72.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '96x96',
        href: '/icons/Icon-96.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/icons/Icon-144.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '192x192',
        href: '/icons/Icon-192.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '512x512',
        href: '/icons/Icon-192.png'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://sanquotes.vercel.app/media/random-quotes.png'
      }
    ]
  },
  loading: { color: '#e84b0d' },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/bulma',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    'nuxt-clipboard2'
  ],
  /*
   ** Add overriding info for meta items
   */
  meta: {
    name: 'San Quotes', // this is needed to change title for all PWA meta tags
    description: 'Get Real-time Random Quotes from Different Quote Categories.' // this is needed to change title for all PWA meta tags
  },
  manifest: {
    name: 'San Quotes',
    short_name: 'San Quotes',
    description: 'Get Real-time Random Quotes from Different Quote Categories.',
    icons: [
      {
        src: '/icons/Icon-48.png',
        sizes: '48x48',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/icons/Icon-72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/icons/Icon-96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/icons/Icon-144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/icons/Icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/icons/Icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    orientation: 'any'
  },
  pwa: {
    icon: false // disables the icon module
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  }
}
