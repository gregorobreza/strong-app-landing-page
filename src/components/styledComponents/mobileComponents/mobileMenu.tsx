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
    <Drawer  opened={opened} onClose={close} size={"100%"} title=" " styles={{close: {minWidth: 40, minHeight: 40}}} closeButtonProps={{iconSize: 40}}>
      {children}
    </Drawer>
  );
}
