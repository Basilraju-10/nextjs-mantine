"use client";

import {
  Box,
  Button,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const team = [
  {
    image: "/images/team/ceo.webp",
    name: "Akif Aziz",
    role: "Chief Executive Officer",
  },
  {
    image: "/images/team/hos.webp",
    name: "Asif Aziz",
    role: "Head of Sales",
  },
];

export default function LeadershipTeam() {
  return (
      <Box bg="white" py={100}>
    <Container size="lg" py={100}>
      {/* Heading */}
      <Stack align="center" gap={6} mb={70}>
        <Text
          tt="uppercase"
          size="sm"
          fw={600}
          c="#6B7280"
        >
          LEADERSHIP TEAM
        </Text>

        <Title
          order={1}
          ta="center"
          fw={700}
          style={{ fontSize: 48 }}
        >
          Our{" "}
          <Text component="span" inherit c="#00B060">
            Leadership Team
          </Text>
        </Title>
      </Stack>

      {/* Team Members */}
      <SimpleGrid
        cols={{ base: 1, md: 2 }}
        spacing={120}
      >
        {team.map((member) => (
          <Stack
            key={member.name}
            align="center"
            gap={8}
          >
            <Image
              src={member.image}
              alt={member.name}
              w={260}
              h={260}
              fit="cover"
              radius={0}
            />

            <Title
              order={3}
              mt={20}
              c="#00895A"
              fw={700}
            >
              {member.name}
            </Title>

            <Text
              size="md"
              c="dimmed"
            >
              {member.role}
            </Text>

            <Button
              variant="outline"
              color="#00B060"
              radius="xl"
              size="md"
              mt={12}
              styles={{
                root: {
                  width: 130,
                  height: 42,
                  borderWidth: 1.5,
                },
              }}
            >
              View Profile
            </Button>
          </Stack>
        ))}
      </SimpleGrid>
    </Container>
    </Box>
  );
}