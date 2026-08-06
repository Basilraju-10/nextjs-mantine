"use client";

import { useEffect } from "react";
import { Button, Center, Stack, Text, Title } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function GlobalError({ error }: { error: Error }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Center mih="100vh">
      <Stack align="center" spacing="md">
        <Title order={2}>Something went wrong</Title>
        <Text color="dimmed">{error.message}</Text>
        <Button onClick={() => router.refresh()}>Try again</Button>
      </Stack>
    </Center>
  );
}
