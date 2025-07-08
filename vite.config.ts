import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 로컬에서 IP 주소로 접속 가능하도록 설정
  server: {
    host: '0.0.0.0'
  }
});
