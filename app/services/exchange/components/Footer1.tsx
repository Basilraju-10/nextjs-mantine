"use client";

import {
  ActionIcon,
  Box,
  Container,
  Divider,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Footer1() {
  return (
    <Box bg="#006B2E" c="white" py={70}>
      <Container size="xl">
        <Flex
          justify="space-between"
          align="flex-start"
          wrap="wrap"
          gap={60}
        >
          {/* Logo */}
          <Box w={220}>
            <Image
              src="/images/gfa-logo-footer.svg"
              w={150}
              mb={40}
            />

            <Group>
              <ActionIcon
                radius="xl"
                size={42}
                color="white"
                variant="filled"
                bg="#0C823C"
              >
                <IconBrandFacebook size={20} />
              </ActionIcon>

              <ActionIcon
                radius="xl"
                size={42}
                color="white"
                variant="filled"
                bg="#0C823C"
              >
                <IconBrandLinkedin size={20} />
              </ActionIcon>

              <ActionIcon
                radius="xl"
                size={42}
                color="white"
                variant="filled"
                bg="#0C823C"
              >
                <IconBrandInstagram size={20} />
              </ActionIcon>
            </Group>
          </Box>

          {/* Sitemap */}
          <Stack gap={10}>
            <Title order={4} c="white">
              Site Map
            </Title>

            {[
              "Home",
              "About Us",
              "Parts",
              "Services",
              "Relationships",
              "Inventory",
              "Quality",
              "News",
              "Contact Us",
              "FAQ",
            ].map((item) => (
              <Text key={item} c="white">
                {item}
              </Text>
            ))}
          </Stack>

          {/* AOG */}
          <Box maw={330}>
            <Title order={4} c="white" mb={10}>
              24/7 AOG Desk:
            </Title>

            <Text mb={20}>
              +971507654471 &nbsp; | &nbsp; aog@gfa.aero
            </Text>

            <Text lh={1.8}>
              Our AOG line is dedicated to serve our clientele around the globe
              24×7 way throughout the year. The AOG Professionals update the
              inventory time to time so that our clients get the accurate access
              as per their requirements.
            </Text>
          </Box>

          {/* Address */}
          <Box maw={320}>
            <Group gap={30} mb={10}>
              <Text fw={700}>USA</Text>
              <Text>Jordan</Text>
              <Text>India</Text>
              <Text>UAE</Text>
            </Group>

            <Divider color="rgba(255,255,255,.3)" mb={20} />

            <Text lh={1.8}>
              Emerald Plaza 402 West Broadway Suite #400
              <br />
              San Diego, CA 92101
            </Text>

            <Title order={4} c="white" mt={35} mb={10}>
              Connect us
            </Title>

            <Text>Tel: +1 858 309 5463</Text>
            <Text>E-mail: info@gfa.aero</Text>
          </Box>
        </Flex>

        <Divider color="rgba(255,255,255,.15)" my={60} />

        <Flex justify="space-between" wrap="wrap">
          <Text c="white">
            Copyright 2026 © GFA. All rights are reserved
          </Text>

          <Group gap={8}>
            <Text c="white">Privacy Policy</Text>
            <Text c="white">|</Text>
            <Text c="white">Return & Cancellation Policy</Text>
            <Text c="white">|</Text>
            <Text c="white">Terms & Conditions</Text>
          </Group>
        </Flex>
      </Container>
    </Box>
  );
}