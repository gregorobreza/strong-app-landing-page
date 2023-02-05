import { LINKS } from "@/staticData/headerLinks";
import { AppShell } from "@mantine/core";
import { PropsWithChildren } from "react";
import { HeaderAction } from "./header";

interface LayoutProps {}

export function Layout({ children, ...props }: PropsWithChildren<LayoutProps>) {
  return <AppShell
  header={<HeaderAction links={[...LINKS.links]} />}>{children}</AppShell>;
}
