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
      <header className="z-50 h-20 bg-white border-b border-gray-200 shadow-sm">
        <Container fluid className="h-full">
          <Group
            h="100%"
            w="100%"
            justify="space-between"
            align="center"
            wrap="nowrap"
          >

            {/* Left */}
            <Group gap="lg" align="center" wrap="nowrap">

              <Image
                src="https://gfa.aero/theme_golden_aviation/static/src/image%203.0/logo.svg"
                alt="GFA Logo"
                width={110}
                height={45}
                priority
              />

              <Group
                gap="lg"
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

                    <Menu.Item component={Link} href="/exchange">
                      Exchange
                    </Menu.Item>

                    <Menu.Item component={Link} href="/repair">
                      Repair
                    </Menu.Item>

                    <Menu.Item component={Link} href="/support">
                      AOG Desk
                    </Menu.Item>
                    <Menu.Item component={Link} href="/component">
                      Component Lease
                    </Menu.Item>
                    <Menu.Item component={Link} href="/inventory-sales">
                      Inventory Consignment Sales
                    </Menu.Item>
                    <Menu.Item component={Link} href="/logistics">
                      Logistics
                    </Menu.Item>
                    <Menu.Item component={Link} href="/quality-control">
                      Quality Control
                    </Menu.Item>
                    <Menu.Item component={Link} href="/surplus-parts">
                      Surplus Parts Purchase
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>


                <Link
                  href="/quality"
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
                    Quality
                  </Text>
                </Link>

                <Link
                  href="/events"
                  style={{ textDecoration: "none" }}
                >
                  <Text
                  size="sm">
                  Events
                </Text>
                </Link>

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

                    <Menu.Item component={Link} href="/about">
                      About
                    </Menu.Item>
                    <Menu.Item component={Link} href="/career">
                      Career
                    </Menu.Item>
                    <Menu.Item component={Link} href="/contact">
                      Contact
                    </Menu.Item>
                    <Menu.Item component={Link} href="/Inventory">
                      Inventory
                    </Menu.Item>
                    <Menu.Item component={Link} href="/quality">
                      Quality
                    </Menu.Item>
                    <Menu.Item component={Link} href="/relationships">
                      Relationships
                    </Menu.Item>  
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
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin size={16} />
              </ActionIcon>


              <ActionIcon
                color="green"
                variant="filled"
                radius="xl"
                size="md"
                aria-label="Call AOG Desk"
              >
                <IconPhone size={16} />
              </ActionIcon>


              <Text fw={500} size="sm">
                AOG Desk
              </Text>


             <ActionIcon
              component={Link} 
              href="/cart"
              variant="subtle"
              color="dark"
              size="md"
              aria-label="Shopping cart"
            >
              <IconShoppingCart size={20} />
            </ActionIcon>

              <Group gap={6} align="center">

                <ActionIcon
                  color="green"
                  variant="filled"
                  radius="xl"
                  size="md"
                  aria-label="Download login"
                >
                  <IconDownload size={15} />
                </ActionIcon>


                <Text fw={700} size="sm">
                  GFA Login
                </Text>

              </Group>

            </Group>


            {/* Mobile Menu */}

            <Burger
              hiddenFrom="md"
              opened={opened}
              onClick={() => setOpened(!opened)}
              aria-label={opened ? "Close navigation menu" : "Open navigation menu"}
            />

          </Group>
        </Container>
      </header>


      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Navigation"
        padding="md"
      >

        <Stack gap="md">
          {[
            { label: "Who We Are", href: "/whoweare" },
            { label: "Exchange", href: "/services/exchange" },
            { label: "Repair", href: "/services/repair" },
            { label: "Support", href: "/services/support" },
            { label: "Quality", href: "/quality" },
            { label: "Events", href: "/events" },
            { label: "About", href: "/about" },
            { label: "Careers", href: "/careers" },
          ].map((item) => (
            <Text
              key={item.href}
              component={Link}
              href={item.href}
              fw={600}
              size="md"
              styles={{
                root: {
                  textDecoration: "none",
                  color: "#0B7A3E",
                  transition: "color 0.2s ease",
                  display: "block",
                },
              }}
            >
              {item.label}
            </Text>
          ))}

          <Text c="dimmed" size="sm" mt="xl">
            Quick access to parts, services, quality, and support.
          </Text>

        </Stack>

      </Drawer>
    </>
  );
}