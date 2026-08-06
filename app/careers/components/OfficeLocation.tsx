"use client";

import { Box, Container, Image, Stack, Text, Title } from "@mantine/core";

export default function OfficeLocation() {
  return (
    <Box py={100} bg="white">
      <Container size="lg">
        <Stack align="center" gap="xs">
          <Text
            tt="uppercase"
            fw={700}
            size="sm"
            c="dimmed"
            style={{ letterSpacing: "2px" }}
          >
            Office Locations
          </Text>

          <Title
            order={1}
            ta="center"
            fw={700}
            style={{
              fontSize: "36px",
              lineHeight: 1.2,
            }}
          >
            <Text
              component="span"
              c="#00B86B"
              inherit
            >
              Your Next Stop:
            </Text>{" "}
            Your Career
          </Title>

        </Stack>

        {/* Background Image */}
        <Box
          mt={0}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/images/globe-square.png"
            alt="World Map"
            style={{
              width: "100%",
              maxWidth: "900px",
              opacity: 0.15,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}