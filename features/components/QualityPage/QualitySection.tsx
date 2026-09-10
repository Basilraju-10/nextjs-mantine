"use client";

import {
  Box,
  Container,
  Grid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function QualitySection() {
  return (
    <Box bg="white" py={100}>
      <Container size="lg">
        <Stack gap={60}>
          {/* Heading */}
          <Box
            pl={20}
            style={{
              borderLeft: "3px solid #00B060",
              maxWidth: 600,
            }}
          >
            <Title
              order={2}
              style={{
                fontSize: 34,
                fontWeight: 400,
                lineHeight: 1.3,
                color: "#475569",
              }}
            >
              Neque porro quisquam est qui dolorem
              <br />
              ipsum quia dolor sit amet
            </Title>
          </Box>

          {/* Content */}
          <Grid gap={70}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Text
                size="sm"
                c="#475569"
                style={{ lineHeight: 2 }}
              >
                GFA has been demarcated by the best standards in the
                industry through strict quality adherence to ASA and FAA
                norm, while giving our utmost value to extraordinary
                quality in service. The emphasized factors like
                competence and reliability, all of which are regulated
                according to the requirements of the aerospace industry.
              </Text>

              <Text
                mt={40}
                size="sm"
                c="#475569"
                style={{ lineHeight: 2 }}
              >
                It is a quality system standard for civil aircraft parts
                distributors and our continued conformation to these
                quality standards is a testament to our resolute
                commitment towards service quality. In addition, we
                conduct internal audit/quality team checks regularly
                pinning certifications by Airlines and MROs.
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Text
                size="sm"
                c="#475569"
                style={{ lineHeight: 2 }}
              >
                GFA maintains the AS9120 certified quality management
                systems, through our consistency in the provision of
                high quality products and services that meet our customer
                needs. This validates our organizational knowledge gained
                by our experience in the field and our effective process
                performance.
              </Text>

              <Text
                mt={40}
                size="sm"
                c="#475569"
                style={{ lineHeight: 2 }}
              >
                The certification of AS9120B and ISO 9001:2015 specifies
                additional requirements explicit to aerospace
                distribution, such as product and service conformity,
                on-time delivery, work transfers, configuration
                management, etc. It is intended for organizations that
                acquire parts, materials, and assemblies to resell these
                products to customers in the aviation, space, and
                defense industries.
              </Text>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}