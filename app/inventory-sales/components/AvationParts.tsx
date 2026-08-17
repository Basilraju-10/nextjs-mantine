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
 
 
  IconBuildingWarehouse,
  IconCoins,
  IconFileText,
  IconHeartHandshake,
  IconShield,
  IconTarget,
} from "@tabler/icons-react";

const services = [
  {
    icon: IconShield,
    title: "Lower Obsolescence Risk",
    description:
      "Consign your slow-moving or excess inventory to GFA. We actively market them to global operators before parts become obsolete or lose market value.",
  },
  {
    icon: IconTarget,
    title: "Global Marketing Reach",
    description:
      "We list your parts on major aviation databases, promote them to airline customers directly, and use our sales networks to find qualified buyers quickly.",
  },
  {
    icon: IconFileText,
    title: "Transparent Reporting",
    description:
      "Get complete monthly sales reports detailing quantities sold, average sales price, and consignment commissions, ensuring absolute transparency.",
  },
  {
    icon: IconBuildingWarehouse,
    title: "Secure Warehousing",
    description:
      "All consigned items are stored in our climate-controlled, FAA-approved storage hubs, maintaining their airworthy condition and certifications.",
  },
  {
    icon: IconCoins,
    title: "Optimized Cash Flow",
    description:
      "Turn your surplus parts into liquid capital. Receive monthly payouts on sold parts, converting dead inventory into working capital.",
  },
  {
    icon: IconHeartHandshake,
    title: "Hassle-Free Processing",
    description:
      "We manage everything from customer inquiries, export compliance, packaging, shipping, and collection, so you can focus on core airline operations.",
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