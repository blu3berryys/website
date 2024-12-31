// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://eclipse.menu',
    server: { 
        host: true,
        port: 8080
    },
});
