import { Box, Stack, Title, Text, createStyles } from "@mantine/core";
import { Icon } from "@tabler/icons-react";

export interface IFeatureBox {
  Icon: Icon;
  title: string;
  text: string;
}


export function FeatureContainer({
  Icon,
  title,
  text,
}: IFeatureBox): JSX.Element {
  return (
    <Box p={30} mih={320} sx={(theme) => ({backgroundColor: theme.fn.rgba("#ffffff", 0.05), borderRadius: 25})}>
      <Stack>
        <Icon size={50} color="red"/>
        <Title size="h2" order={3} >{title}</Title>
        <Text>{text}</Text>
      </Stack>
    </Box>
  );
}
