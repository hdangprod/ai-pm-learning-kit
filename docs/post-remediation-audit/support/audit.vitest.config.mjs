import {createRequire} from 'node:module';
const require=createRequire('/tmp/posteq-002c35cc1b3f/run/package.json');
const {defineConfig}=await import(require.resolve('vitest/config'));
const {default:react}=await import(require.resolve('@vitejs/plugin-react'));
export default defineConfig({root:'/tmp/posteq-002c35cc1b3f/run',plugins:[react()],test:{environment:'jsdom',setupFiles:['/tmp/posteq-002c35cc1b3f/run/tests/setup.ts'],include:['/tmp/posteq-002c35cc1b3f/audit-probes.test.tsx'],pool:'forks',maxWorkers:1,minWorkers:1}});
