import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';
export default defineConfig({plugins:[react()],test:{environment:'jsdom',setupFiles:['./tests/setup.ts'],include:['docs/verification/evidence-preservation-baseline/probes/*.test.tsx'],maxWorkers:1,minWorkers:1}});
