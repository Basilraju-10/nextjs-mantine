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
    question: 'How does the consignment program work?',
    answer:
      'Under our consignment program, operators ship excess or slow-moving parts to our certified warehouse. GFA markets, sells, packs, and dispatches the parts, paying you a pre-agreed percentage of each sale.',
  },
  {
    question: "What types of inventory can be consigned?",
    answer:
      "We accept high-quality rotables, engines, airframe components, landing gear, avionics, and high-demand consumables that meet standard trace and certification requirements.",
  },
  {
    question: "Who is responsible for shipping and logistics?",
    answer:
      "GFA manages all outgoing logistics, customs clearance, global shipping, and export compliance, simplifying the sales pipeline for our consignment partners.",
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