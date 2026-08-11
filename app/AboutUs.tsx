"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function AboutUs() {
  return (
    <Box bg="white" py={80}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="stretch"
        w="100%"
      >
        {/* Left Side */}
        <Box flex={1} bg="white" py={70}>
          <Container size="md">
            <Text
              tt="uppercase"
              c="dimmed"
              fw={600}
              mb={20}
            >
              ABOUT US
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
                Our Statistics
              </Text>
              Talks
            </Title>

            <Text
              c="dimmed"
              size="md"
              style={{ lineHeight: 2 }}
            >
              When time is of the essence, this GFA program saves the day.
              Let's say you have the component you need, but it requires a
              repair you don't have time to make. No problem. Exchange it
              with one of ours. Chances are, we have several in our vast
              inventory, each one traced to a regulated source that assures
              it's in serviceable condition, ready for installation.
            </Text>

            {/* Centered Button */}
            <Flex justify="center" mt={25}>
              <Button
                variant="outline"
                color="#00B060"
                radius="xl"
                size="md"
                styles={{
                  root: {
                    width: 130,
                    height: 42,
                    borderWidth: 1.5,
                  },
                }}
              >
                Know More
              </Button>
            </Flex>
          </Container>
        </Box>

        {/* Right Side */}
        <Box
          flex={1}
          py={70}
          style={{
            backgroundImage: "url('/images/signup-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
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
                support and extensive Talks
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