import { CookieType } from "@/components/dataComponents/modals/cookiesModal";
import { getCookie, setCookie } from "cookies-next";

type possibleCookies =
  | "consentPerformanceCookies"
  | "consentAdvertisingCookies"
  | "consentSocialMediaCookies";

export function useSetConsentCookies() {
  const listOfAll: possibleCookies[] = [
    "consentPerformanceCookies",
    "consentAdvertisingCookies",
    "consentSocialMediaCookies",
  ];
  function acceptAllCookies() {
    listOfAll.map((cookie) => {
      setCookie(cookie, "true", {
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
    });
  }
  function denyAllCookies() {
    listOfAll.map((cookie) => {
      setCookie(cookie, "false", {
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
    });
  }
  function manageCookies(cookieType: CookieType) {
    setCookie(
      "consentPerformanceCookies",
      cookieType.performance === undefined ? false : cookieType.performance,
      {
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      }
    );
    setCookie(
      "consentAdvertisingCookies",
      cookieType.advertising === undefined ? false : cookieType.advertising,
      {
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      }
    );
    setCookie(
      "consentSocialMediaCookies",
      cookieType.social === undefined ? false : cookieType.social,
      {
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      }
    );
  }
  function currentCookies(): CookieType {
    const performance = getCookie("consentPerformanceCookies");
    const advertising = getCookie("consentAdvertisingCookies");
    const social = getCookie("consentSocialMediaCookies");
    return {
      essential: true,
      performance: performance,
      social: social,
      advertising: advertising,
    };
  }
  function showCookiesBanner(): boolean {
    const performance = getCookie("consentPerformanceCookies");
    const advertising = getCookie("consentAdvertisingCookies");
    const social = getCookie("consentSocialMediaCookies");
    let showBanner = false;
    const cookiesValues: CookieType = {
      essential: true,
      performance: performance,
      social: social,
      advertising: advertising,
    };
    for (const key in cookiesValues) {
      if (
        cookiesValues.hasOwnProperty(key) &&
        (cookiesValues as any)[key] === undefined
      ) {
        showBanner = true;
        break;
      }
    }
    return showBanner;
  }
  return {
    acceptAllCookies: acceptAllCookies,
    denyAllCookies: denyAllCookies,
    manageCookies: manageCookies,
    currentCookies: currentCookies,
    showCookiesBanner: showCookiesBanner,
  };
}
