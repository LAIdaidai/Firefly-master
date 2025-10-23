/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

type ImportMetaEnv = Record<string, never>;

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
