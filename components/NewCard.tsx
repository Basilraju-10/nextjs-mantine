"use client";

import { Box, Button, Card, Group, Text, Title } from "@mantine/core";

type NewsCardProps = {
  title: string;
  date: string;
  description: string;
  location: string;
};

export default function NewCard({
  title,
  date,
  description,
  location,
    
}: NewsCardProps) {
  return (
    <Card
      radius={0}
      p={36}
      style={{
        background: "#FBFDFB",
        minHeight: 350,
        display: "flex",
        flexDirection: "column",
        border: "none",
        boxShadow: "none",
      }}
    >
      <Box>
        <Title
          order={3}
          style={{
            color: "#00552F",
            fontSize: 18,
            fontWeight: 700,
            lineHeight: "30px",
            marginBottom: 22,
          }}
        >
          {title}
        </Title>

        <Group gap={10} mb={24}>
          <Box
            style={{
              width: 2,
              height: 16,
              background: "#006B2E",
            }}
          />

          <Text size="sm" c="dimmed">
            {date}
          </Text>
        </Group>

        <Text
          style={{
            fontSize: 15,
            lineHeight: "30px",
            color: "#737373",
          }}
        >
          {description}
        </Text>
      </Box>

      <Box mt="auto" pt={34}>
        <Text size="sm" mb={28} c="#666">
          {location}
        </Text>

        <Button
          variant="outline"
          radius="xl"
          color="#73D88C"
          h={34}
        >
          View Details
        </Button>
      </Box>

      

    </Card>
  );
}