"use client";

import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function OurStory() {
  return (
    <Box bg="white" py={80}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="stretch"
        w="100%"
      >
        {/* Left Side */}
        <Box
          flex={1}
          bg="white"
          py={70}
        >
          <Container size="md">
            <Text
              tt="uppercase"
              c="dimmed"
              fw={600}
              mb={20}
            >
              OUR STORY
            </Text>

            <Title
              order={1}
              style={{
                fontSize: 50,
                lineHeight: 1.1,
                marginBottom: 30,
              }}
            >
              <Text component="span" inherit c="#00B060">
                Aviation Solutions,
              </Text>
              <br />
              Delivered!
            </Title>

            <Text
              c="dimmed"
              size="md"
              style={{ lineHeight: 2 }}
            >
              GFA took off a decade ago into the world of Aviation, with a
              simple yet powerful objective of delivering quality spares and
              maintaining on-time service. In an industry where time and tide
              waits for no man, GFA has been able to offer first-class spares
              support to a cluster of Airlines across the globe without
              compromising on quality and time. The priority has always remained
              aircraft safety and offering quality services 24×7, 365 days a
              year.
            </Text>
          </Container>
        </Box>

        {/* Right Side */}
        <Box
          flex={1}
          bg="#00552F"
          py={70}
        >
          <Container size="md">
            <Stack gap={50}>
              <Title
                order={2}
                c="white"
                fw={500}
                style={{ lineHeight: 1.2 }}
              >
                With our round-the-clock
                <br />
                support and extensive
                <br />
                inventory
              </Title>

              <Flex wrap="wrap" gap={50}>
                {[
                  ["3 Mn+", "Aircraft Parts Delivered"],
                  ["500+", "Aircraft Spares Vendors"],
                  ["250+", "Airline Customers"],
                  ["50+", "Repair Stations"],
                ].map(([number, label]) => (
                  <Flex
                    key={label}
                    w={220}
                    gap="md"
                    align="flex-start"
                  >
                    <Box
                      w={4}
                      h={60}
                      bg="#00D084"
                      style={{ borderRadius: 10 }}
                    />

                    <Box>
                      <Text
                        fz={36}
                        fw={500}
                        c="white"
                      >
                        {number}
                      </Text>

                      <Text
                        c="white"
                        size="sm"
                      >
                        {label}
                      </Text>
                    </Box>
                  </Flex>
                ))}
              </Flex>
            </Stack>
          </Container>
        </Box>
      </Flex>
    </Box>
  );
}