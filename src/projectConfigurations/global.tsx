import { Global } from '@mantine/core';
// import bold from './costumFonts/Oswald-Bold.woff2';
// import roboto from './costumFonts/Roboto-Condensed.woff2';

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Oswald',
            fontStyle: "normal",
            fontWeight: 700,
            fontDisplay: "swap",
            src: `url('https://fonts.gstatic.com/s/oswald/v49/TK3_WkUHHAIjg75cFRf3bXL8LICs1xZosUZiYySUhiCXAA.woff') format('woff')`,
            unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
          },
        },
        {
          '@font-face': {
            fontFamily: 'Roboto Condensed',
            fontStyle: "normal",
            fontWeight: 700,
            fontDisplay: "swap",
            src: `url('https://fonts.gstatic.com/s/robotocondensed/v25/ieVi2ZhZI2eCN5jzbjEETS9weq8-32meGCQYb9lecyU.woff2') format('woff2')`,
            unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
          },
        },
      ]}
    />
  );
}