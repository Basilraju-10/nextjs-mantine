import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function AboutSection() {
  return (
    <Box
      style={{
        position: "relative",
        background: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Background Text */}
      <Text
        style={{
          position: "absolute",
          left: -40,
          top: 30,
          fontSize: 520,
          fontWeight: 800,
          color: "#F3F6F4",
          lineHeight: 0.8,
          userSelect: "none",
          zIndex: 0,
        }}
      >
        GFA
      </Text>

      <Container
        size="lg"
        py={80}
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Flex justify="flex-end">
          <Box maw={560}>
            <Stack gap={28}>
              <Title
                order={2}
                style={{
                  color: "#006B4F",
                  fontSize: 54,
                  fontWeight: 400,
                  lineHeight: 1.15,
                }}
              >
                With our round-the-clock
                <br />
                support and extensive
                <br />
                inventory
              </Title>

              <Text
                c="dimmed"
                size="lg"
                style={{
                  lineHeight: 1.9,
                }}
              >
                When time is of the essence, this GFA program saves the day.
                Lets say you have the component you need, but it requires a
                repair you dont have time to make. No problem. Exchange it
                with one of ours. Chances are, we have several in our vast
                inventory, each one traced to a regulated source that assures
                its in serviceable condition, ready for installation.
              </Text>

              <Flex
                wrap="wrap"
                gap={50}
                mt={20}
              >
                <Box w={220}>
                  <Title order={2} c="#00A651">
                    3 Mn+
                  </Title>

                  <Text c="dimmed">
                    Aircraft Parts Delivered
                  </Text>
                </Box>

                <Box w={220}>
                  <Title order={2} c="#00A651">
                    500+
                  </Title>

                  <Text c="dimmed">
                    Aircraft Spares Vendors
                  </Text>
                </Box>

                <Box w={220}>
                  <Title order={2} c="#00A651">
                    250+
                  </Title>

                  <Text c="dimmed">
                    Airline Customers
                  </Text>
                </Box>

                <Box w={220}>
                  <Title order={2} c="#00A651">
                    50+
                  </Title>

                  <Text c="dimmed">
                    Repair Stations
                  </Text>
                </Box>
              </Flex>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}