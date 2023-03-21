import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { defaultThemeOverride } from "@/projectConfigurations/themeConfig";
import { CustomFonts } from "@/projectConfigurations/global";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Strong app | Revolutionize managing strength training</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" type="image/svg+xml" href="/strongman.svg" />
        <link rel="icon" type="image/x-icon" href="/strongman.ico" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          ...defaultThemeOverride,
        }}
      >
        <CustomFonts/>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
