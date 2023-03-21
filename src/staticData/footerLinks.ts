import { SectionName } from "@/components/layout/header";

export interface StrongFooterProps {
  links: { sectionName?: SectionName; label: string }[];
  scrollTo: Record<SectionName, any>;
}

export const footerLinks:{ sectionName?: SectionName; label: string }[]  = [
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
    },
  ]
