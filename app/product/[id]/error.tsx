"use client";

import { useEffect } from "react";
import { Button, Center, Stack, Text, Title } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function ProductError({ error }: { error: Error }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Center mih="100vh">
      <Stack align="center" spacing="md">
        <Title order={2}>Unable to load product</Title>
        <Text color="dimmed">{error.message}</Text>
        <Button onClick={() => router.push("/catalog")}>Back to catalog</Button>
      </Stack>
    </Center>
  );
}
