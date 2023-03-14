import { footerLinks } from "@/staticData/footerLinks";
import { LINKS } from "@/staticData/headerLinks";
import { AppShell } from "@mantine/core";
import { PropsWithChildren } from "react";
import { StrongFooter } from "./footer";
import { HeaderAction } from "./header";

interface LayoutProps {
  scrollTo: any
}

export function Layout({ children,scrollTo,  ...props }: PropsWithChildren<LayoutProps>) {
  return (
    <AppShell
      styles={{
        main: {
          padding: 0,
        },
      }}
      header={<HeaderAction links={LINKS.links} />}
      footer={<StrongFooter links={footerLinks.links} />}
      fixed={false}
    >
      {children}
    </AppShell>
  );
}
