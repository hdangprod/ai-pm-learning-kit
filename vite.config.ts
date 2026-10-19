import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
export default defineConfig(({mode})=>({ plugins: [react()], server:mode==='test'?undefined:{fs:{deny:['**/.env','**/.env.*','**/*.{crt,pem}','**/.git/**','**/materials/**','**/assessment/**','**/docs/**','**/scripts/**','**/tests/**']}}, test: { environment: 'jsdom', setupFiles: ['./tests/setup.ts'], include: ['tests/**/*.test.{ts,tsx}'] } }));
