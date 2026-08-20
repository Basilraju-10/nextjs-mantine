"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";

export default function ContactSection() {
  return (
    <Box bg="white" py={{ base: 70, md: 100 }}>
      <Container size="md">
        <Grid>
          {/* Left Side */}
          <Grid.Col
            span={{ base: 12, md: 6 }}
            style={{
              paddingRight: 40,
            }}
          >
            <Box>
             <Title
                order={2}
                style={{
                  borderLeft: "3px solid #007A3D",
                  paddingLeft: 16,
                  color: "#006B35",
                  fontSize: "30px",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  maxWidth: 380,
                }}
              >
                With our round-the-clock
                <br />
                support and extensive
                <br />
                inventory
              </Title>

              <Text
                mt={38}
                size="sm"
                c="#6B7780"
                style={{
                  lineHeight: 1.9,
                  maxWidth: 430,
                  fontSize: 14,
                }}
              >
                Have questions or inquiries about our aerospace and fleet
                asset solutions? We&apos;re here to help. Contact GFA today for
                more information.
              </Text>
            </Box>
          </Grid.Col>

          {/* Right Side */}
          <Grid.Col
            span={{ base: 12, md: 6 }}
            style={{
              paddingLeft: 40,
            }}
          >
            <Stack gap={16}>
              <Text
                fw={500}
                c="#1E293B"
                style={{
                  lineHeight: 1.4,
                  fontSize: 16,
                  maxWidth: 360,
                }}
              >
                Use the form below to get in touch with{" "}
                <span
                  style={{
                    color: "#007A3D",
                    fontWeight: 700,
                  }}
                >
                  GFA!
                </span>
              </Text>

              <TextInput
                placeholder="Full Name *"
                size="md"
                aria-label="Full Name"
                styles={{
                  input: {
                    height: 43,
                    borderColor: "#D5DCE0",
                    borderRadius: 6,
                    fontSize: 13,
                  },
                }}
              />

              <TextInput
                placeholder="Email Address *"
                size="md"
                type="email"
                aria-label="Email Address"
                styles={{
                  input: {
                    height: 43,
                    borderColor: "#D5DCE0",
                    borderRadius: 6,
                    fontSize: 13,
                  },
                }}
              />

              {/* Phone Number */}
              <Box
                style={{
                  display: "flex",
                  border: "1px solid #D5DCE0",
                  borderRadius: 6,
                  height: 43,
                  overflow: "hidden",
                }}
              >
                <Box
                  px={12}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    borderRight: "1px solid #D5DCE0",
                    minWidth: 112,
                    fontSize: 13,
                  }}
                >
                  <span>🇮🇳</span>

                  <Text size="sm">IN +91</Text>

                  <Text size="xs" c="#7B8790">
                    ▾
                  </Text>
                </Box>

                <TextInput
                  placeholder="Mobile Number *"
                  variant="unstyled"
                  style={{
                    flex: 1,
                  }}
                  aria-label="Mobile Number"
                  styles={{
                    input: {
                      height: 41,
                      paddingLeft: 12,
                      fontSize: 13,
                    },
                  }}
                />
              </Box>

              {/* Looking For */}
              <Select
                placeholder="What are you looking for?"
                size="md"
                aria-label="What are you looking for?"
                data={[
                  "Aircraft Parts",
                  "Repair & Overhaul",
                  "Exchange",
                  "Support",
                  "Other",
                ]}
                styles={{
                  input: {
                    height: 43,
                    borderColor: "#D5DCE0",
                    borderRadius: 6,
                    fontSize: 13,
                  },
                }}
              />

              {/* Message */}
              <Textarea
                placeholder="Message"
                minRows={2}
                autosize={false}
                aria-label="Message"
                styles={{
                  input: {
                    height: 56,
                    borderColor: "#D5DCE0",
                    borderRadius: 6,
                    fontSize: 13,
                    paddingTop: 12,
                  },
                }}
              />

              {/* Submit */}
              <Button
                type="submit"
                radius="xl"
                w={128}
                h={42}
                mt={8}
                color="#006B35"
                aria-label="Submit contact form"
                styles={{
                  root: {
                    fontSize: 14,
                    fontWeight: 500,
                  },
                }}
              >
                Submit
              </Button>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}