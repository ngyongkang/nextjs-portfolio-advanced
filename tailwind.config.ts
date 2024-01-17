import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import { customColors } from './customColors'

const currentColors = {...colors, ...customColors};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      ...currentColors,
      primary: currentColors.blue,
      secondary: currentColors.cyan,
      background: currentColors.gray,
      mainText: currentColors.white,
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
export default config
