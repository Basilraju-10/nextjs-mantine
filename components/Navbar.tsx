"use client";

import { useState } from "react";
import Image from "next/image";

import {
  ActionIcon,
  Burger,
  Container,
  Drawer,
  Group,
  Menu,
  Stack,
  Text,
} from "@mantine/core";

import {
  IconBrandLinkedin,
  IconChevronDown,
  IconDownload,
  IconPhone,
  IconPlus,
  IconShoppingCart,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Navbar() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 h-20 bg-white border-b border-gray-200 shadow-sm">
        <Container size="xl" className="h-full">
          <Group
            h="100%"
            justify="space-between"
            align="center"
            wrap="nowrap"
          >
            {/* Left */}
            <Group gap={40} align="center" wrap="nowrap">
              <Image
                src="https://gfa.aero/theme_golden_aviation/static/src/image%203.0/logo.svg"
                alt="GFA Logo"
                width={110}
                height={45}
                priority
              />

              <Group
                gap={30}
                visibleFrom="md"
                align="center"
                wrap="nowrap"
              >
               
<Link
  href="/whoweare"
  style={{ textDecoration: "none" }}
>
  <Text
    fw={500}
    size="sm"
    styles={{
      root: {
        transition: "color 0.2s ease",

        "&:hover": {
          color: "#2dab56",
        },
      },
    }}
  >
    Who We Are
  </Text>
</Link>

                <Menu trigger="hover" shadow="md" width={180}>
                  <Menu.Target>
                    <Group
                      gap={4}
                      align="center"
                      style={{ cursor: "pointer" }}
                    >
                      <Text fw={500} size="sm">
                        Services
                      </Text>
                      <IconChevronDown size={15} />
                    </Group>
                  </Menu.Target>

                  <Menu.Dropdown>
                     <Menu.Item component={Link} href="/services/repair">
    Repair
  </Menu.Item>
                    <Menu.Item component={Link} href="/services/maintenance">
    Maintenance
  </Menu.Item>
                    <Menu.Item component={Link} href="/services/support">
    Support
  </Menu.Item>
                  </Menu.Dropdown>
                </Menu>

                <Text fw={500} size="sm">
                  Quality
                </Text>

                <Text fw={500} size="sm">
                  Events
                </Text>

                <Menu trigger="hover" shadow="md" width={180}>
                  <Menu.Target>
                    <Group
                      gap={4}
                      align="center"
                      style={{ cursor: "pointer" }}
                    >
                      <IconPlus size={14} color="#0B7A3E" />

                      <Text fw={500} size="sm">
                        More
                      </Text>
                    </Group>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Item>About</Menu.Item>
                    <Menu.Item>Career</Menu.Item>
                    <Menu.Item>Contact</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Group>
            </Group>

            {/* Right */}

            <Group
              gap="md"
              visibleFrom="md"
              align="center"
              wrap="nowrap"
            >
              <ActionIcon
                color="green"
                variant="filled"
                radius="xl"
                size="md"
              >
                <IconBrandLinkedin size={16} />
              </ActionIcon>

              <ActionIcon
                color="green"
                variant="filled"
                radius="xl"
                size="md"
              >
                <IconPhone size={16} />
              </ActionIcon>

              <Text fw={500} size="sm">
                AOG Desk
              </Text>

              <ActionIcon
                variant="subtle"
                color="dark"
                size="md"
              >
                <IconShoppingCart size={20} />
              </ActionIcon>

              <Group gap={6} align="center">
                <ActionIcon
                  color="green"
                  variant="filled"
                  radius="xl"
                  size="md"
                >
                  <IconDownload size={15} />
                </ActionIcon>

                <Text fw={700} size="sm">
                  GFA Login
                </Text>
              </Group>
            </Group>

            <Burger
              hiddenFrom="md"
              opened={opened}
              onClick={() => setOpened(!opened)}
            />
          </Group>
        </Container>
      </header>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Menu"
        padding="md"
      >
        <Stack gap="lg">
          <Text>Who We Are</Text>
          <Text>Services</Text>
          <Text>Quality</Text>
          <Text>Events</Text>
          <Text>More</Text>
          <Text>AOG Desk</Text>
          <Text>GFA Login</Text>
        </Stack>
      </Drawer>
    </>
  );
}