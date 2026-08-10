"use client";

import {
  Container,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

import AircraftPartCard from "./AircraftPartCard";

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
      {/* Heading */}
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
        Find Any Spare Parts for Your Aircraft
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

      {/* Cards */}
      <SimpleGrid
        cols={{ base: 1, md: 3 }}
        spacing="xl"
      >
        {values.map((value) => (
          <AircraftPartCard
            key={value.title}
            image={value.image}
            title={value.title}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}