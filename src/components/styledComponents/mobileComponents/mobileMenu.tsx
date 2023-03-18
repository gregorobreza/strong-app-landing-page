import { Drawer } from "@mantine/core";
import { PropsWithChildren } from "react";

interface MobileDrawerProps {
  opened: boolean;
  close: () => void;
}

export function MobileDrawer({
  opened,
  close,
  children
}: PropsWithChildren<MobileDrawerProps>): JSX.Element {
  return (
    <Drawer  opened={opened} onClose={close} size={"100%"} title=" " closeButtonProps={{iconSize: 50}}>
      {children}
    </Drawer>
  );
}
