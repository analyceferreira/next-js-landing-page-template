// eslint-disable-next-line import/no-extraneous-dependencies
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-inter)'],
      },
      colors: {
        primary: '#47cffd',
        secondary: '#203ea3',
        tertiary: '#4d6b93',
        alternative: '#898989',
        contrast: '#FFFFFF',
        'primary-text': '#000',
        'secondary-text': '#343434',
        'highlight-text': '#203ea3',
        'accent-1': '#c30f81',
        'accent-2': '#01B6F4',
        'accent-3': '#FDE047',
        'primary-background': '#FFFFFF',
        'secondary-background': '#ecedf0',
        'primary-border': '#203ea3',
        'secondary-border': '#898989',
        error: '#e44f4f)',
        success: '#74a860',
        warning: '#f6de68',
        info: '#FFFFFF',
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line func-names
    plugin(function ({ matchVariant }) {
      matchVariant(
        'nth',
        (value) => {
          return `&:nth-child(${value})`;
        },
        {
          values: {
            1: '1',
            2: '2',
            3: '3',
          },
        },
      );
    }),
    // eslint-disable-next-line func-names
    function ({ addVariant }) {
      addVariant('child', '&>*');
      addVariant('child-hover', '&>*:hover');
      addVariant('child-active', '&>*:active');
      addVariant('child-focus', '&>*:focus');
      addVariant('child-focus-visible', '&>*:focus-visible');
      addVariant('child-focus-within', '&>*:focus-within');
      addVariant('child-visited', '&>*:visited');
      addVariant('child-disabled', '&>*:disabled');
      addVariant('child-checked', '&>*:checked');
      addVariant('child-default', '&>*:default');
      addVariant('child-required', '&>*:required');
      addVariant('child-placeholder', '&>*::placeholder');
      addVariant('child-first', '&>*:first-child');
      addVariant('child-last', '&>*:last-child');
      addVariant('child-only', '&>*:only-child');
      addVariant('child-first-of-type', '&>*:first-of-type');
      addVariant('child-last-of-type', '&>*:last-of-type');
      addVariant('child-only-of-type', '&>*:only-of-type');
      addVariant('child-link', '&>*:link');
      addVariant('child-target', '&>*:target');
      addVariant('child-active', '&>*:active');
      addVariant('child-not-last', '&>*:not(:last-child)');
      addVariant('child-not-first', '&>*:not(:first-child)');
      addVariant('child-hover-not-last', '&>*:hover:not(:last-child)');
      addVariant('child-hover-not-first', '&>*:hover:not(:first-child)');
      addVariant('child-focus-not-last', '&>*:focus:not(:last-child)');
      addVariant('child-focus-not-first', '&>*:focus:not(:first-child)');
      addVariant(
        'child-focus-visible-not-last',
        '&>*:focus-visible:not(:last-child)',
      );
      addVariant(
        'child-focus-visible-not-first',
        '&>*:focus-visible:not(:first-child)',
      );
      addVariant('asd', '&_svg');
    },
  ],
};
