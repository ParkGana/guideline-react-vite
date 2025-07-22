import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from 'vite-plugin-babel';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      babelConfig: {
        plugins: ['babel-plugin-styled-components']
      }
    })
  ],
  // 경로 별칭 설정
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src'
      }
    ]
  },
  // 로컬에서 IP 주소로 접속 가능하도록 설정
  server: {
    host: '0.0.0.0'
  }
});
