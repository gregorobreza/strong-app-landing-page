import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { defaultThemeOverride } from "@/projectConfigurations/themeConfig";
import { CustomFonts } from "@/projectConfigurations/global";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title>Barbell Logbook | Revolutionize managing strength training</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" type="image/svg+xml" href="/strongman.svg" />
        <link rel="icon" type="image/x-icon" href="/strongman.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            ...defaultThemeOverride,
          }}
        >
          <CustomFonts />
          <Component {...pageProps} />
        </MantineProvider>
      </QueryClientProvider>
    </>
  );
}
