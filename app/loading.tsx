import { Loader, Center, Stack, Text } from "@mantine/core";

export default function LoadingPage() {
  return (
    <Center mih="100vh">
      <Stack align="center" spacing="xs">
        <Loader size="lg" />
        <Text size="lg">Loading content...</Text>
      </Stack>
    </Center>
  );
}
