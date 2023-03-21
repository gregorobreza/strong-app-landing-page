import { footerLinks } from "@/staticData/footerLinks";
import { LINKS } from "@/staticData/headerLinks";
import { AppShell } from "@mantine/core";
import { PropsWithChildren } from "react";
import { StrongFooter } from "./footer";
import { HeaderAction, SectionName } from "./header";

interface LayoutProps {
  scrollTo: Record<SectionName, any>
}

export function Layout({ children,scrollTo,  ...props }: PropsWithChildren<LayoutProps>) {
  return (
    <AppShell
      styles={{
        main: {
          padding: 0,
        },
      }}
      header={<HeaderAction links={LINKS} scrollTo={scrollTo} />}
      footer={<StrongFooter links={footerLinks} scrollTo={scrollTo} />}
      fixed={false}
    >
      {children}
    </AppShell>
  );
}
