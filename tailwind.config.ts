import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Tailwind 4.1은 CSS 변수를 사용하므로 다음과 같이 설정
        jura: ['var(--font-jura)'],
        dohyeon: ['var(--font-dohyeon)'],
        nanum: ['var(--font-nanum)'],
      },
    },
  },
  plugins: [],
};

export default config;
