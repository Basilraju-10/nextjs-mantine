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
  IconCertificate,
  IconEye,
  IconFileText,
  IconShieldCheck,
  IconTemperature,
} from "@tabler/icons-react";

const services = [
  {
    icon: IconFileText,
    title: "Trace Verification",
    description:
      "Meticulous verification of back-to-birth history, operator trace, and dual-release certificates (FAA Form 8130-3 / EASA Form 1) for every part.",
  },
  {
    icon: IconEye,
    title: "Visual Inspection",
    description:
      "High-resolution microscope checks, structural integrity analysis, and physical dimensions measurements to identify even microscopic wear.",
  },
  {
    icon: IconShieldCheck,
    title: "Non-Destructive Testing",
    description:
      "NDT checks, dye penetrant inspections, and ultrasonic tests are carried out to confirm structural health without altering the parts.",
  },
  {
    icon: IconTemperature,
    title: "Climate-Controlled Storage",
    description:
      "Parts are stored in humidity and temperature regulated warehouses to prevent corrosion, degradation, or static charge damage.",
  },
  {
    icon: IconAward,
    title: "Regulatory Auditing",
    description:
      "Our quality system is continuously audited by third-party certification bodies, airlines, and aviation authorities to maintain top standards.",
  },
  {
    icon: IconCertificate,
    title: "Certificate of Conformity",
    description:
      "Every single shipment is dispatched with GFA's own certificate of conformity alongside the manufacturer's trace logs.",
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