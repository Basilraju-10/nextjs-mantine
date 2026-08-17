"use client";

import {
  Accordion,
  Box,
  Container,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const faqs = [
  {
    question: 'Why is logistics important in aviation?',
    answer:
      'Logistics is critical in aviation to ensure that aircraft parts, tools, and maintenance personnel are at the right place at the right time. Efficient logistics support reduces aircraft downtime, guarantees safety compliance, and improves flight punctuality.',
  },
  {
    question: "What are the key components of aviation logistics?",
    answer:
      "Key components include inventory management, warehouse storage, customs clearance, freight forwarding, and specialized transportation services like air cargo or door-to-door courier deliveries.",
  },
  {
    question: "How does aviation logistics impact flight operations?",
    answer:
      "Aviation logistics directly impacts flight operations by minimizing maintenance delays. A well-structured logistics network ensures that critical aircraft-on-ground (AOG) spares are dispatched and delivered swiftly, avoiding costly delays or cancellations.",
  },
];

export default function FAQSection() {
  return (
    <Box bg="white" py={100}>
      <Container size="md">
        <Stack align="center" gap={4} mb={60}>
          <Text
            tt="uppercase"
            c="dimmed"
            fw={600}
            size="sm"
          >
            FAQ
          </Text>

          <Title
            order={2}
            ta="center"
            style={{
              fontSize: 38,
              fontWeight: 700,
            }}
          >
            <Text component="span" inherit c="#0C823C">
              Frequently
            </Text>{" "}
            Asked Questions
          </Title>
        </Stack>

        <Accordion
          variant="unstyled"
          chevronPosition="right"
        >
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={String(index)}
            >
              <Accordion.Control
                px={0}
                py={22}
                styles={{
                  label: {
                    color: "#0C823C",
                    fontSize: 16,
                    fontWeight: 500,
                  },
                  chevron: {
                    color: "#00C853",
                  },
                }}
              >
                {faq.question}
              </Accordion.Control>

              <Accordion.Panel px={0} pb={20}>
                <Text
                  c="dimmed"
                  size="sm"
                  style={{ lineHeight: 1.8}}
                >
                  {faq.answer}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
}