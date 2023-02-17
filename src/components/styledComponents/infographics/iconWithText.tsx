import { Group, Text } from "@mantine/core";
import { Icon } from "@tabler/icons-react";
import { PropsWithChildren } from "react";

export interface IIconWithText {
  Icon: Icon;
  text: string;
}

export function IconWithText({ Icon, text }: IIconWithText): JSX.Element {
  return (
    <Group spacing="xs" noWrap>
      <div>
        <Icon size={45} />
      </div>
      <Text>{text}</Text>
    </Group>
  );
}
