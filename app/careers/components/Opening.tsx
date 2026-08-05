"use client";

import { Box, Container, SimpleGrid } from "@mantine/core";
import NewCard from "@/components/NewCard";

const services = [
  {
    id: 1,
    title: "Manufacturing Process Engineer",
    date: "August 15, 2025",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    location: "Full Time • GFA Dubai",
  },
  {
    id: 2,
    title: "Quality Assurance Inspector I, MRO",
    date: "August 15, 2025",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    location: "Full Time • GFA Dubai",
  },
  {
    id: 3,
    title: "Manufacturing Process Engineer",
    date: "August 15, 2025",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    location: "Full Time • GFA Dubai",
  },
];

export default function LatestNews() {
  return (
    <Box bg="white">
      <Container size="xl" py={90}>
        <SimpleGrid
          cols={{ base: 1, md: 2, lg: 3 }}
          spacing={30}
        >
          {services.map((service) => (
            <NewCard
              key={service.id}
              title={service.title}
              date={service.date}
              description={service.description}
              location={service.location}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}