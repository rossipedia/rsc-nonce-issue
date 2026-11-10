import react from '@vitejs/plugin-react'
import rsc from '@vitejs/plugin-rsc'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [rsc(), react()],
  build: {
    rolldownOptions: {
      platform: 'neutral',
      output: {
        format: 'esm',
      },
    },
  },
  environments: {
    client: {
      build: {
        rolldownOptions: {
          input: {
            index: './src/index.client.tsx',
          },
        },
      },
    },
    ssr: {
      build: {
        rolldownOptions: {
          input: {
            index: './src/index.ssr.tsx',
          },
          output: { entryFileNames: '[name].js' },
        },
      },
    },
    rsc: {
      build: {
        rolldownOptions: {
          input: {
            index: './src/index.rsc.tsx',
          },
          output: { entryFileNames: '[name].js' },
        },
      },
    },
  },
})
