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
    question: 'Why is R&O important in aviation?',
    answer:
      'R&O is crucial in aviation to ensure airworthiness, safety, and operational reliability. Regular maintenance and overhaul of critical components help prevent in-flight failures, extend the service life of assets, and ensure compliance with strict civil aviation regulations.',
  },
  {
    question: "What is structural R&O in aircraft?",
    answer:
      "Structural R&O involves the repair, restoration, and overhaul of the aircraft's primary and secondary structures. This includes components like the fuselage, wings, control surfaces, and landing gear, ensuring they maintain their structural integrity and load-bearing capacity.",
  },
  {
    question: "What types of components are subject to R&O?",
    answer:
      "A wide range of components are subject to R&O, including engines, auxiliary power units (APUs), landing gears, avionics, flight control systems, and pneumatic/hydraulic components. Any critical system that experiences wear and tear during operations requires periodic R&O.",
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