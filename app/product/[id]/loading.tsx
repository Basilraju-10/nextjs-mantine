import { Center, Loader, Stack, Text } from "@mantine/core";

export default function ProductLoading() {
  return (
    <Center mih="100vh">
      <Stack align="center" spacing="xs">
        <Loader size="lg" />
        <Text size="lg">Loading product details...</Text>
      </Stack>
    </Center>
  );
}
