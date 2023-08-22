import { defineConfig } from 'vite'
import fs from 'fs/promises';

// This file is necessary when using both .js and .jsx files in a vite environment.
export default defineConfig(() => ({
  server: {
    proxy: {
      '/api': "http://localhost:8080"  // THIS IS BACKEND'S URL,  THE FRONTEND'S URL IS FROM -> http://localhost:5173
    }
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: "load-js-files-as-jsx",
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
              loader: "jsx",
              contents: await fs.readFile(args.path, "utf8"),
            }));
          },
        },
      ],
    },
  },
}));