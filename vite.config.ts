import { UserConfig } from 'vite';

import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const config: UserConfig = {
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: `
      import React from 'react';
      import { jsx } from '@emotion/react';
    `,
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
    }
  }
}

export default config;