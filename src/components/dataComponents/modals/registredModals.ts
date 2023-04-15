import { CookiesCardModal } from "./cookiesModal";
import { PrivacyPolicyModal } from "./privacyPolicy";
import { TermsAndConditionsModal } from "./termsAndConditions";

export const modals = {
    cookiesSettings: CookiesCardModal,
    privacyPolicy: PrivacyPolicyModal,
    termsAndConditions: TermsAndConditionsModal,
    /* ...other modals */
  };
  declare module '@mantine/modals' {
    export interface MantineModalsOverride {
      modals: typeof modals;
    }
  }