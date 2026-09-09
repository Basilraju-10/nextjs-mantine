"use client";

import { Box, Card, Image, Title } from "@mantine/core";

interface AircraftPartCardProps {
  image: string;
  title: string;
}

export default function AircraftPartCard({
  image,
  title,
}: AircraftPartCardProps) {
  return (
    <Card
      radius="md"
      padding={0}
      shadow="md"
      style={{
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <Box pos="relative">
        <Image
          src={image}
          alt={title}
          h={260}
        />

        {/* Gradient Overlay */}
        <Box
          pos="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.15), transparent)",
          }}
        />

        {/* Title */}
        <Title
          order={2}
          c="white"
          ta="center"
          pos="absolute"
          bottom={25}
          left={0}
          right={0}
          fw={700}
        >
          {title}
        </Title>
      </Box>
    </Card>
  );
}