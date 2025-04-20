import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'My E-Commerce App',
        short_name: 'ShopApp',
        description: 'A simple PWA e-commerce app',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        screenshots: [
        {
          "src": "/screenshots/desktop-screenshot.png",
          "sizes": "1920x1080",
          "type": "image/png",
          "form_factor": "wide"
        },
        {
          "src": "/screenshots/mobile-screenshot.png",
          "sizes": "375x812",
          "type": "image/png",
          "form_factor": "narrow"
        }
        ],
        icons: [
          {
            src: 'favicon.ico',
            sizes: '128x128',
            type: 'image/png'
          },
        ]
      }
    })
  ]
});
