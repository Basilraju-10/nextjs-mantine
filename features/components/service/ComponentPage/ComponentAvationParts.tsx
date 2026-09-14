"use client";

import {
  Card,
  Container,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";

import {
 
  IconAward,
  IconClock,
  IconCoins,
  IconFileInvoice,
  IconRefresh,
  IconShieldCheck,
} from "@tabler/icons-react";

const services = [
  {
    icon: IconCoins,
    title: "Capital Savings",
    description:
      "Minimize your initial capital investment by leasing major rotables, engine parts, and avionics, keeping your cash flow flexible for core operations.",
  },
  {
    icon: IconClock,
    title: "Flexible Terms",
    description:
      "Choose between short-term, long-term, or lease-purchase options depending on your maintenance cycles and fleet retirement strategies.",
  },
  {
    icon: IconShieldCheck,
    title: "Maintenance Included",
    description:
      "Our fully-integrated leasing agreements can cover routine repairs, wear & tear, and mandatory compliance inspections so you face no surprise costs.",
  },
  {
    icon: IconRefresh,
    title: "Upgrade Options",
    description:
      "Easily exchange leased units for newer versions or alternate parts when your fleet configuration updates or dynamic requirements change.",
  },
  {
    icon: IconFileInvoice,
    title: "Consolidated Billing",
    description:
      "Simple monthly or hourly billing cycles that align with your operating expenses, making budget planning straightforward and predictable.",
  },
  {
    icon: IconAward,
    title: "Full Compliance",
    description:
      "All leased rotables undergo periodic airworthiness checks and come with complete FAA/EASA certified logs to keep you audit-ready.",
  },
];

export default function AviationParts() {
  return (
   
      <Container size="xl" py={100}>
        {/* Heading */}
        <Stack align="center" gap={8} mb={60}>
           <Text ta="center" size="sm" c="dimmed">
          FEATURES AND BENEFITS
        </Text>
          <Title
            order={1}
          ta="center"
          style={{
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          <Text component="span" inherit c="#00552F">
            Aviation Parts:
          </Text>{" "}
          Empowering Your Journey
        </Title>

       
      </Stack>

      {/* Cards */}
     <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Card
              key={service.title}
              className="latest-news-card"
              padding="xl"
              radius={0}
              shadow={undefined}
              withBorder={false}
              style={{
                minHeight: 260,
                background: "#edf4ed",
                borderRadius: 0,
                boxShadow: "none",
                border: "none",
              }}
            >
              <ThemeIcon
                variant="transparent"
                color="green"
                size={40}
                mb="lg"
              >
                <Icon size={28} />
              </ThemeIcon>

              <Title order={3} mb="md" size="md"
              c="#00552F">
                {service.title}
              </Title>

              <Text
                c="dimmed"
                size="sm"
                style={{ lineHeight: 1.8 }}
              >
                {service.description}
              </Text>
            </Card>
          );
        })}
      </SimpleGrid>
    </Container>

  );
}