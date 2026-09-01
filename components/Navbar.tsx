"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ActionIcon,
  Anchor,
  Button,
  Burger,
  Checkbox,
  Container,
  Drawer,
  Group,
  Menu,
  Modal,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";

import {
  IconBrandLinkedin,
  IconChevronDown,
  IconDownload,
  IconPhone,
  IconPlus,
  IconShoppingCart,
} from "@tabler/icons-react";

export default function Navbar() {
  const [opened, setOpened] = useState(false);
  const [loginOpened, setLoginOpened] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="z-50 h-20 border-b border-gray-200 bg-white shadow-sm">
        <Container fluid className="h-full">
          <Group
            h="100%"
            w="100%"
            justify="space-between"
            align="center"
            wrap="nowrap"
          >
            {/* LEFT */}
            <Group gap="lg" align="center" wrap="nowrap">
              {/* Logo */}
              <Image
                src="https://gfa.aero/theme_golden_aviation/static/src/image%203.0/logo.svg"
                alt="GFA Logo"
                width={110}
                height={45}
                priority
              />

              {/* DESKTOP NAVIGATION */}
              <Group
                gap="lg"
                visibleFrom="md"
                align="center"
                wrap="nowrap"
              >
                <Link href="/whoweare" style={{ textDecoration: "none" }}>
                  <Text fw={500} size="sm">
                    Who We Are
                  </Text>
                </Link>

                {/* SERVICES */}
                <Menu trigger="hover" shadow="md" width={220}>
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

                    <Menu.Item component={Link} href="/aog-desk">
                      AOG Desk
                    </Menu.Item>

                    <Menu.Item component={Link} href="/component">
                      Component Lease
                    </Menu.Item>

                    <Menu.Item
                      component={Link}
                      href="/inventory-sales"
                    >
                      Inventory Consignment Sales
                    </Menu.Item>

                    <Menu.Item component={Link} href="/logistics">
                      Logistics
                    </Menu.Item>

                    <Menu.Item
                      component={Link}
                      href="/quality-control"
                    >
                      Quality Control
                    </Menu.Item>

                    <Menu.Item
                      component={Link}
                      href="/surplus-parts"
                    >
                      Surplus Parts Purchase
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>

                <Link href="/quality" style={{ textDecoration: "none" }}>
                  <Text fw={500} size="sm">
                    Quality
                  </Text>
                </Link>

                <Link href="/events" style={{ textDecoration: "none" }}>
                  <Text size="sm">Events</Text>
                </Link>

                {/* MORE */}
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

                    <Menu.Item
                      component={Link}
                      href="/relationships"
                    >
                      Relationships
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Group>
            </Group>

            {/* RIGHT */}
            <Group
              gap="md"
              visibleFrom="md"
              align="center"
              wrap="nowrap"
            >
              {/* LinkedIn */}
              <ActionIcon
                color="green"
                variant="filled"
                radius="xl"
                size="md"
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin size={16} />
              </ActionIcon>

              {/* Phone */}
              <ActionIcon
                color="green"
                variant="filled"
                radius="xl"
                size="md"
                aria-label="Call AOG Desk"
              >
                <IconPhone size={16} />
              </ActionIcon>

              {/* AOG DESK */}
              <Text
                fw={500}
                size="sm"
                component={Link}
                href="/aog-desk"
                style={{ textDecoration: "none" }}
              >
                AOG Desk
              </Text>

              {/* CART */}
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

              {/* GFA LOGIN */}
              <Group
                gap={6}
                align="center"
                style={{ cursor: "pointer" }}
                onClick={() => setLoginOpened(true)}
              >
                <ActionIcon
                  color="green"
                  variant="filled"
                  radius="xl"
                  size="md"
                  aria-label="GFA Login"
                >
                  <IconDownload size={15} />
                </ActionIcon>

                <Text fw={700} size="sm">
                  GFA Login
                </Text>
              </Group>
            </Group>

            {/* MOBILE MENU */}
            <Burger
              hiddenFrom="md"
              opened={opened}
              onClick={() => setOpened(!opened)}
              aria-label={
                opened ? "Close navigation menu" : "Open navigation menu"
              }
            />
          </Group>
        </Container>
      </header>

      {/* MOBILE DRAWER */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Navigation"
        padding="md"
      >
        <Stack gap="md">
          {[
            { label: "Who We Are", href: "/whoweare" },
            { label: "Exchange", href: "/exchange" },
            { label: "Repair", href: "/repair" },
            { label: "Support", href: "/support" },
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
              style={{
                textDecoration: "none",
                color: "#0B7A3E",
                display: "block",
              }}
              onClick={() => setOpened(false)}
            >
              {item.label}
            </Text>
          ))}

          <Text c="dimmed" size="sm" mt="xl">
            Quick access to parts, services, quality, and support.
          </Text>
        </Stack>
      </Drawer>

      {/* LOGIN MODAL */}
      <Modal
        opened={loginOpened}
        onClose={() => setLoginOpened(false)}
        centered
        title="Sign In to Continue"
        size={440}
        radius="md"
        padding={16}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 1,
        }}
      >
        <Stack gap="md">
          <Text size="sm" c="dimmed">
            Please sign in to add items to cart or raise RFQ
          </Text>

          <Text size="sm">
            New to GFA?{" "}
            <Anchor href="/signup" c="green" fw={500}>
              Sign up
            </Anchor>
          </Text>

          <TextInput
            label="Email ID"
            placeholder="you@mantine.dev"
            required
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
          />

          <Group justify="space-between">
            <Checkbox label="Remember me" size="sm" />

            <Anchor href="/forgot-password" c="green" size="sm">
              Forgot password?
            </Anchor>
          </Group>

          <Button fullWidth color="green" mt="md">
            Sign In
          </Button>
        </Stack>
      </Modal>
    </>
  );
}