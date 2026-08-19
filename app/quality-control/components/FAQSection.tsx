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
    question: 'What quality certifications does GFA hold?',
    answer:
      'GFA holds internationally recognized AS9120B and ISO 9001:2015 certifications, ensuring that our aerospace quality management system meets the absolute highest standard.',
  },
  {
    question: "How does GFA verify the history of rotables?",
    answer:
      "Our quality team performs rigorous 'back-to-birth' tracing, examining all previous operator logbooks, maintenance releases, and overhaul documentation prior to stocking.",
  },
  {
    question: "What happens if a component fails a quality check?",
    answer:
      "Any component failing inspection is immediately placed in quarantine, labeled as non-conforming, and investigated to ensure it never enters the supply chain.",
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