"use client";

import {
  Box,
  Card,
  Container,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

const values = [
  {
    image: "/images/rotables.webp",
    title: "Rotables",
  },
  {
    image: "/images/engines_apu.webp",
    title: "Engines & APUs",
  },
  {
    image: "/images/avionics.webp",
    title: "Avionics",
  },
  {
    image: "/images/expendables.webp",
    title: "Expendables",
  },
  {
    image: "/images/consumables.webp",
    title: "Consumables",
  },
  {
    image: "/images/support_units.webp",
    title: "Support Units & Tools",
  },
];

export default function OurValues() {
  return (
    <Container size="lg" py={80}>
      <Title
        order={1}
        ta="center"
        mb={16}
        style={{
          fontSize: 35,
          fontWeight: 800,
          lineHeight: 1.2,
        }}
      >
        <Text component="span" inherit c="#00B060">
          Find Any Spare Parts
        </Text>{" "}
        for Your Aircraft
      </Title>

      <Text
        ta="center"
        size="lg"
        fw={500}
        c="dimmed"
        mb={60}
      >
        Your Hub for Certified Parts, MRO, Engine Leasing & More
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
        {values.map((value) => (
          <Card
            key={value.title}
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
                src={value.image}
                alt={value.title}
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
                {value.title}
              </Title>
            </Box>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}