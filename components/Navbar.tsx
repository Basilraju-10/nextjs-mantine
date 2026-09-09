"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ActionIcon,
  Anchor,
  Button,
  Checkbox,
  Container,
  Drawer,
  Group,
  Indicator,
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

import { useCart } from "@/context/CartContext";

const services = [
  ["Exchange", "/exchange"],
  ["Repair", "/repair"],
  ["AOG Desk", "/aog-desk"],
  ["Component Lease", "/component"],
  ["Inventory Consignment Sales", "/inventory-sales"],
  ["Logistics", "/logistics"],
  ["Quality Control", "/quality-control"],
  ["Surplus Parts Purchase", "/surplus-parts"],
];

const moreItems = [
  ["About", "/about"],
  ["Career", "/career"],
  ["Contact", "/contact"],
  ["Inventory", "/Inventory"],
  ["Quality", "/quality"],
  ["Relationships", "/relationships"],
];

const mobileItems = [
  ["Who We Are", "/whoweare"],
  ["Exchange", "/exchange"],
  ["Repair", "/repair"],
  ["Support", "/support"],
  ["Quality", "/quality"],
  ["Events", "/events"],
  ["About", "/about"],
  ["Careers", "/careers"],
];

export default function Navbar() {
  const [opened, setOpened] = useState(false);
  const [loginOpened, setLoginOpened] = useState(false);

  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
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
              <Image
                src="https://gfa.aero/theme_golden_aviation/static/src/image%203.0/logo.svg"
                alt="GFA Logo"
                width={110}
                height={45}
                priority
              />

              {/* DESKTOP MENU */}
              <Group
                gap="lg"
                visibleFrom="md"
                align="center"
                wrap="nowrap"
              >
                <Link href="/whoweare" className="no-underline">
                  <Text fw={500} size="sm">
                    Who We Are
                  </Text>
                </Link>

                {/* SERVICES */}
                <Menu trigger="hover" shadow="md" width={220}>
                  <Menu.Target>
                    <Group
                      gap={4}
                      style={{ cursor: "pointer" }}
                    >
                      <Text fw={500} size="sm">
                        Services
                      </Text>
                      <IconChevronDown size={15} />
                    </Group>
                  </Menu.Target>

                  <Menu.Dropdown>
                    {services.map(([name, href]) => (
                      <Menu.Item
                        key={href}
                        component={Link}
                        href={href}
                      >
                        {name}
                      </Menu.Item>
                    ))}
                  </Menu.Dropdown>
                </Menu>

                <Link href="/quality" className="no-underline">
                  <Text fw={500} size="sm">
                    Quality
                  </Text>
                </Link>

                <Link href="/events" className="no-underline">
                  <Text size="sm">Events</Text>
                </Link>

                {/* MORE */}
                <Menu trigger="hover" shadow="md" width={180}>
                  <Menu.Target>
                    <Group
                      gap={4}
                      style={{ cursor: "pointer" }}
                    >
                      <IconPlus
                        size={14}
                        color="#0B7A3E"
                      />
                      <Text fw={500} size="sm">
                        More
                      </Text>
                    </Group>
                  </Menu.Target>

                  <Menu.Dropdown>
                    {moreItems.map(([name, href]) => (
                      <Menu.Item
                        key={href}
                        component={Link}
                        href={href}
                      >
                        {name}
                      </Menu.Item>
                    ))}
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

              <Text
                fw={500}
                size="sm"
                component={Link}
                href="/aog-desk"
                className="no-underline"
              >
                AOG Desk
              </Text>

              {/* CART */}
              <Indicator
                label={cartCount}
                size={18}
                color="green"
                disabled={cartCount === 0}
                offset={4}
                withBorder
              >
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
              </Indicator>

              {/* LOGIN */}
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

            {/* MOBILE BUTTON */}
            <ActionIcon
              hiddenFrom="md"
              variant="subtle"
              onClick={() => setOpened(true)}
            >
              <Text size="xl">☰</Text>
            </ActionIcon>
          </Group>
        </Container>
      </header>

      {/* MOBILE MENU */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Navigation"
        padding="md"
      >
        <Stack gap="md">
          {mobileItems.map(([label, href]) => (
            <Text
              key={href}
              component={Link}
              href={href}
              fw={600}
              size="md"
              style={{
                textDecoration: "none",
                color: "#0B7A3E",
                display: "block",
              }}
              onClick={() => setOpened(false)}
            >
              {label}
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
      >
        <Stack gap="md">
          <Text size="sm" c="dimmed">
            Please sign in to add items to cart or raise RFQ
          </Text>

          <Text size="sm">
            New to GFA?{" "}
            <Anchor href="/signup" c="green">
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
            <Checkbox
              label="Remember me"
              size="sm"
            />

            <Anchor
              href="/forgot-password"
              c="green"
              size="sm"
            >
              Forgot password?
            </Anchor>
          </Group>

          <Button fullWidth color="green">
            Sign In
          </Button>
        </Stack>
      </Modal>
    </>
  );
}