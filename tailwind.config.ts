import type { Config } from 'tailwindcss'
import { nexusui } from '@nexus-ds/react'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nexus-ds/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  darkMode: 'class',
  plugins: [
    nexusui({
      defaultTheme: 'dark',
      themes: {
        dark: {
          colors: {
            background: {
              DEFAULT: 'rgb(21, 24, 23)'
            }
          }
        }
      }
    })
  ]
}
export default config
