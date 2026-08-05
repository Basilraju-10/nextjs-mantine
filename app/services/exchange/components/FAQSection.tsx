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
    question: 'Can you explain the "Exchange Plus Cost" model in detail?',
    answer:
      'Exchange Plus Cost means an exchange in which the customer pays the exchange fee at the initial stage and subsequently pays the cost of the repair and overhaul of the off-unit.',
  },
  {
    question: "What is the process for initiating an aircraft exchange?",
    answer:
      "Simply contact our AOG team with your aircraft part requirement. We will arrange the exchange process and shipment.",
  },
  {
    question: "What are the exchange options available for aircraft?",
    answer:
      "We offer Flat Exchange, Exchange Plus Cost, Loan, Lease and Repair Exchange solutions.",
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
                    color: "#006B4F",
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