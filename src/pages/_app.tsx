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
        <meta property="og:site_name" content="Barbell Logbook" />
        <title>
          Barbell Logbook | Revolutionize managing strength training
        </title>
        <meta
          name="og:title"
          content="Barbell Logbook | Revolutionize managing strength training"
        />
        <meta
          name="title"
          content="Barbell Logbook | Revolutionize managing strength training"
        />
        <meta property="og:url" content="https://barbelllogbook.com/" />
        <meta
          name="og:description"
          content="The Barbell Logbook is the ultimate strength platform for strength athletes and strength coaches. Track custom workout plans, records exercises, and shows progress analytics."
        />
        <meta
          name="description"
          content="The Barbell Logbook is the ultimate strength platform for strength athletes and strength coaches. Track custom workout plans, records exercises, and shows progress analytics."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://barbelllogbook.com/barbell_logbook_logo_canvas.png"
        />
        <meta name="og:image:alt" content="Barbell Logbook logo" />
        <meta name="twitter:card" content="summary_large_image" />
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
