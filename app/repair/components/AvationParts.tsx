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
    title: "Defective Part Replacement",
    description:
      "We value your safety. We replace all out of service parts with premium and original parts to deliver maximum speed, performance and trust.",
  },
  {
    icon: IconClipboardText,
    title: "Quality Control",
    description:
      "Quality is at the core of all our services. We run multiple quality checks and custom test facilities for superior quality controls.",
  },
  {
    icon: IconCpu,
    title: "Comprehensive Inspection",
    description:
      "Full inspection of all components to understand their condition, check any wear or structural issues, find active repair needs and ensure long term durability.",
  },
  {
    icon: IconTool,
    title: "Skilled Workforce",
    description:
      "Highly skilled and certified technicians, engineers, and specialists undergo rigorous training to understand aircraft components. We can deliver superior-grade repair & overhaul services for you.",
  },
  {
    icon: IconTag,
    title: "Documentation",
    description:
      "Complete documentation of all processes including maintenance, repair, and inspection reports are prepared. This ensures complete transparency, compliance with regulatory guidelines, and traceability of all components.",
  },
  {
    icon: IconClock,
    title: "Safety",
    description:
      "Our main priority is to make safe and secure environments in air voyages, lessening the possibility of unexpected failures or malfunctions, and to guarantee your flight safety.",
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