import { SectionName } from "@/components/layout/header";
import { modals, openContextModal } from "@mantine/modals";

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
      onClick: () => 
      openContextModal({
        modal: "privacyPolicy",
        title: "Privacy & Policy",
        innerProps: {},
        radius: "md",
        size: 800,
        overlayProps: { opacity: 0.5, blur: 4 },
      })
     
    },
  ]
