import { defineConfig } from 'vitest/config';

import angular from '@analogjs/vite-plugin-angular';
import tsconfigPaths from 'vite-tsconfig-paths';

const config = defineConfig(({ mode }) => ({
  plugins: [
    angular(),
    tsconfigPaths({
      configNames: ['tsconfig.json', 'tsconfig.spec.json'],
    }),
  ],
  test: {
    globals: true,
    setupFiles: ['setup-vitest.ts'],
    environment: 'jsdom',
    sequence: {
      hooks: 'list',
    },
    alias: {

    },
    include: ['src/**/*.spec.ts'],
    coverage: {
      provider: 'v8',
      include: ['**/*.{ts,html}'],
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onConsoleLog(log, type) {
      return false;
    },
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));

export default config;
