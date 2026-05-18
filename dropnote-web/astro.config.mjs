// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
    integrations: [
        sanity({
            projectId: 'fsaqqobg',
            dataset: 'production',
            useCdn: false,
            apiVersion: '2026-05-18',
        }),
    ],
});