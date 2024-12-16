import {defineConfig} from 'cypress';
import admin from 'firebase-admin';
import {plugin as cypressFirebasePlugin} from 'cypress-firebase';

export default defineConfig({
    e2e: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setupNodeEvents(on, config) {
            // implement node event listeners here
            return cypressFirebasePlugin(on, config, admin, {});
        },
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        baseUrl: 'http://localhost:3000',
    },
    component: {
        devServer: {
            framework: 'next',
            bundler: 'webpack',
        },
    },
});
