import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/serena/GitRepos/technica-2024/technica-intro-2024/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}