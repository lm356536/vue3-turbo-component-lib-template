/// <reference types="vite/client" />
/// <reference types="antdv-next/global.d.ts" />
/// <reference types="@lmlib/ui/global.d.ts" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'mylib/ui' {
  export * from '@lmlib/ui';
}
