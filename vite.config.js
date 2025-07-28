import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(
            'node_modules/@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg'
          ),
          dest: 'icons/utility-sprite/svg',
        },
        {
          src: path.resolve(
            'node_modules/@salesforce-ux/design-system/assets/icons/action-sprite/svg/symbols.svg'
          ),
          dest: 'icons/action-sprite/svg',
        },
        {
          src: path.resolve(
            'node_modules/@salesforce-ux/design-system/assets/icons/custom-sprite/svg/symbols.svg'
          ),
          dest: 'icons/custom-sprite/svg',
        },
        {
          src: path.resolve(
            'node_modules/@salesforce-ux/design-system/assets/icons/doctype-sprite/svg/symbols.svg'
          ),
          dest: 'icons/doctype-sprite/svg',
        },
        {
          src: path.resolve(
            'node_modules/@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg'
          ),
          dest: 'icons/standard-sprite/svg',
        },
      ],
    }),
  ],
})