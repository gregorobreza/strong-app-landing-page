import { PrivacyPolicy } from "@/components/dataComponents/formal/privacyPolicy";
import { SectionName } from "@/components/layout/header";
import { Title } from "@mantine/core";
import { modals } from "@mantine/modals";

export interface StrongFooterProps {
  links: { sectionName?: SectionName; label: string, onClick?: Function;}[];
  scrollTo: Record<SectionName, any>;
  onClick?: ()=> void ;
}

export const footerLinks:{ sectionName?: SectionName; label: string; onClick?: Function}[]  = [
    {
      sectionName: "dedication",
      label: "About",
    },

    // {
    //   sectionName: "#",
    //   label: "Pricing",
    // },
    {
      label: "Privacy & Policy",
      onClick: () => modals.open({
        title: "Privacy & Policy",
        children: (<><PrivacyPolicy/></>),
        radius: "md",
        size: 800,
        overlayProps:{opacity: 0.5, blur: 4}
      })
    },
  ]
