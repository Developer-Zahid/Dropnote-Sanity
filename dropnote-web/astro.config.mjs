import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [
        sanity({
            projectId: 'fsaqqobg',
            dataset: 'production',
            useCdn: false,
            apiVersion: '2026-05-18',
            stega: {
                studioUrl: 'http://localhost:3333',
            },
        }),
        react()
    ],
    image: {
        domains: ['cdn.sanity.io', 'cdn.prod.website-files.com']
    },
    vite: {
        optimizeDeps: {
        include: [
            "react/compiler-runtime",
            "lodash/isObject.js",
            "lodash/groupBy.js",
            "lodash/keyBy.js",
            "lodash/partition.js",
            "lodash/sortedIndex.js",
        ],
        },
  },
});