import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/serena/GitRepos/technica-2024/technica-intro-2024/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}