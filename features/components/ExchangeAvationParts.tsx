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
  IconArrowsExchange,
  IconClipboardText,
  IconCpu,
  IconTool,
  IconTag,
  IconClock,
} from "@tabler/icons-react";

const services = [
  {
    icon: IconArrowsExchange,
    title: "Instant Availability",
    description:
      "With the availability of inventory from our exchange pool, you can easily have your aircraft back in the air as soon as possible. We also make your often-replaced aircraft parts backed by an actively managed rotable pool.",
  },
  {
    icon: IconClipboardText,
    title: "MRO Support",
    description:
      "You will get extensive MRO support for a broad range of rotable components. We help you minimize repair expenses by adopting rotables and exchange solutions instead of purchasing new aircraft parts.",
  },
  {
    icon: IconCpu,
    title: "Robust service levels",
    description:
      "Our service reduces inventory carrying expenses and manages your repair costs with the option of a flat rate exchange. Our supplier quality management and specialized repair and exchange solutions are at the top.",
  },
  {
    icon: IconTool,
    title: "Additional Options",
    description:
      "We offer more choices in lieu of buying new aviation parts such as exchange, overhaul, repair, and flat rate exchange opportunities. Contact supplier base repairs and overhauls components to meet exacting FAA standards.",
  },
  {
    icon: IconTag,
    title: "Minimize Inventory Investment",
    description:
      "Our broad rotable exchange pool will definitely support you in minimizing your inventory investment and maintenance downtime. Get the most friendly and excellent customer service ever with us.",
  },
  {
    icon: IconClock,
    title: "OEM-approved Team",
    description:
      "Our repair suppliers are selected for their track record of delivering high-quality products, reasonable turnarounds, technical assistance, and dependability. Feel the difference with the OEM-approved team.",
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