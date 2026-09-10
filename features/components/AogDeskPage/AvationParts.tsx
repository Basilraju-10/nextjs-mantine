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
    title: "24/7 Rapid Response",
    description:
      "We understand that every minute on the ground is costly. Our emergency response team acts immediately to source, pack, and ship critical components anywhere globally.",
  },
  {
    icon: IconCpu,
    title: "Priority Air Freight",
    description:
      "AOG orders receive express handling and dispatch. We work closely with major logistics providers to secure the fastest transit times and courier services.",
  },
  {
    icon: IconTool,
    title: "Compliance & Tracing",
    description:
      "All dispatched AOG parts come with full certification, dual-release documentation (FAA/EASA), and full trace reports to ensure absolute flight safety.",
  },
  {
    icon: IconTag,
    title: "MRO Coordination",
    description:
      "Instant coordination with our repair hubs to schedule emergency inspections, component overhauls, or priority exchanges.",
  },
  {
    icon: IconClock,
    title: "Downtime Minimization",
    description:
      "Our main priority is to lessen the possibility of unexpected delays, and our specialized AOG desk is engineered to cut ground time by up to 50%.",
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