// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        strict: true,
        typeCheck: true
    },
    routeRules: {
        '/google': { redirect: 'https://google.com' },
    },
    css: [
        'bootstrap/dist/css/bootstrap.min.css'
    ],
    plugins: [
        '~/plugins/useBootstrap.client.ts'
        // '~/plugins/veevalidate-components.ts'
    ],
    build: {
        transpile: ['vee-validate']
    }
})
