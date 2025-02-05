import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',  // 외부에서 접근할 수 있도록 설정
    port: 3001,  // 원하는 포트 번호로 변경
  },
  plugins: [react()],
})
