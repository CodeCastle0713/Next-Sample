/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
  },
};
export const darkMode = "class";
export const  plugins = [
  nextui({
    layout: {
      spacing: {
        'unit-sm': '12px', // 3 * spacingUnit
        'unit-xs': '8px', // 2 * spacingUnit
        'unit-md': '16px', // 4 * spacingUnit
        'unit-lg': '22px', // 5.5 * spacingUnit
        'unit-xl': '36px', // 9 * spacingUnit
        'unit-2xl': '48px', // 12 * spacingUnit
        'unit-4xl': '120px', // 30 * spacingUnit
        'unit-3xl': '80px', // 20 * spacingUnit
        'unit-5xl': '224px', // 56 * spacingUnit
        'unit-6xl': '288px', // 72 * spacingUnit
        'unit-7xl': '384px', // 96 * spacingUnit
        'unit-8xl': '512px', // 128 * spacingUnit
        'unit-9xl': '640px', // 160 * spacingUnit
        'unit-0': '0px', // 0 * spacingUnit
        'unit-1': '4px', // 1 * spacingUnit
        'unit-2': '8px', // 2 * spacingUnit
        'unit-3': '12px', // 3 * spacingUnit
        'unit-3_5': '14px', // 3.5 * spacingUnit
        'unit-4': '16px', // 4 * spacingUnit
        'unit-5': '20px', // 5 * spacingUnit
        'unit-6': '24px', // 6 * spacingUnit
        'unit-7': '28px', // 7 * spacingUnit
        'unit-8': '32px', // 8 * spacingUnit
        'unit-9': '36px', // 9 * spacingUnit
        'unit-10': '40px', // 10 * spacingUnit
        'unit-11': '44px', // 11 * spacingUnit
        'unit-12': '48px', // 12 * spacingUnit
        'unit-13': '52px', // 13 * spacingUnit
        'unit-14': '56px', // 14 * spacingUnit
        'unit-15': '60px', // 15 * spacingUnit
        'unit-16': '64px', // 16 * spacingUnit
        'unit-17': '68px', // 17 * spacingUnit
        'unit-18': '72px', // 18 * spacingUnit
        'unit-20': '80px', // 20 * spacingUnit
        'unit-24': '96px', // 24 * spacingUnit
        'unit-28': '112px', // 28 * spacingUnit
        'unit-32': '128px', // 32 * spacingUnit
        'unit-36': '144px', // 36 * spacingUnit
        'unit-40': '160px', // 40 * spacingUnit
        'unit-44': '176px', // 44 * spacingUnit
        'unit-48': '192px', // 48 * spacingUnit
        'unit-52': '208px', // 52 * spacingUnit
        'unit-56': '224px', // 56 * spacingUnit
        'unit-60': '240px', // 60 * spacingUnit
        'unit-64': '256px', // 64 * spacingUnit
        'unit-72': '288px', // 72 * spacingUnit
        'unit-80': '320px', // 80 * spacingUnit
        'unit-96': '384px', // 96 * spacingUnit
      },
      disabledOpacity: "0.3",
      fontSize:{
        tiny: "0.75rem", // text-tiny
        small: "0.875rem", // text-small
        medium: "1rem", // text-medium
        large: "1.125rem", // text-large
      },
      lineHeight: {
        tiny: "1rem", // text-tiny
        small: "1.25rem", // text-small
        medium: "1.5rem", // text-medium
        large: "1.75rem", // text-large
      },
      radius: {
        small: "4px",
        medium: "6px",
        large: "8px",
      },
      borderWidth: {
        small: "1px",
        medium: "2px",
        large: "3px",
      },
    },
    color:{
      purple:'#0D001A',
      blue:'#338ef7'
    },
    themes:{
      dark: {//purple color
        colors: {
          background: "#0D001A", //At dark mode,background of window
          foreground: "white", // Normal text color
          primary: { 
            DEFAULT: "#DD62ED", //default purple color
            50: "#3B096C",
            100: "#520F83",
            200: "#7318A2",
            300: "#9823C2",
            400: "#c031e2",
            500: "#DD62ED",
            600: "#F182F6",
            700: "#FCADF9",
            800: "#FDD5F9",
            900: "#FEECFE",
            foreground:"#white"
          },
        },
      },
      light: {//blue color
        colors: {
          background: "#e6f1fe", //At light mode,background of window
          foreground: "#006FEE", // Normal text color
          primary:{ 
            DEFAULT: "#006FEE", //default blue color
            50: "#e6f1fe",
            100: "#cce3fd",
            200: "#99c7fb",
            300: "#66aaf9",
            400: "#338ef7",
            500: "#006FEE",
            600: "#005bc4",
            700: "#004493",
            800: "#002e62",
            900: "#001731",
            foreground:"white"
          }
        },
      },
    }
  })
]
