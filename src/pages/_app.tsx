import { CustomFonts } from "@/projectConfigurations/global";
import { defaultThemeOverride } from "@/projectConfigurations/themeConfig";
import { useSetConsentCookies } from "@/utils/cookieSettings";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import "../styles/globals.css";
import { modals } from "@/components/dataComponents/modals/registredModals";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const queryClient = new QueryClient();
  const { currentCookies } = useSetConsentCookies();

  return (
    <>
      <Head>
        <title>
          Barbell Logbook | Revolutionize managing strength training
        </title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" type="image/svg+xml" href="/strongman.svg" />
        <link rel="icon" type="image/x-icon" href="/strongman.ico" />
      </Head>
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}

        gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'pixel_storage': 'denied'
            });


            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K6PZ7WZ');`,
        }}
      />

      {currentCookies().performance === true && (
        <Script
          id="consupd"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
          `,
          }}
        />
      )}
      {currentCookies().advertising === true && (
        <Script
          id="consuad"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            gtag('consent', 'update', {
              'pixel_storage': 'granted'
            });
          `,
          }}
        />
      )}
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            ...defaultThemeOverride,
          }}
        >
          {" "}
          <ModalsProvider modals={modals}>
            <CustomFonts />
            <GoogleReCaptchaProvider
              reCaptchaKey={process.env.GOOGLE_RECAPTCHA_SITE_KEY || ""}
            >
              <Component {...pageProps} />
            </GoogleReCaptchaProvider>
          </ModalsProvider>
        </MantineProvider>
      </QueryClientProvider>
    </>
  );
}
