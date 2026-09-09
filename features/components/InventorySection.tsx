"use client";

import {
  Box,
  Container,
  Grid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function InventorySection() {
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
               From our decade long successful run with the heavy weights of aviation industry, we understand the importance of maintaining the right inventory to cope up with the parodic demand, technical dependencies, and variable purchase and repair lead times. GFA has been providing some of the world&apos;s regional airlines with the highest quality spare parts from our 20,000 sq. ft. warehouse with more than 2 million parts maintained in excellent condition.
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Text
                size="sm"
                c="#475569"
                style={{ lineHeight: 2 }}
              >
                In addition to our superior selection, we provide industry leading customer service, 24 hour AOG support, and a knowledgeable staff with over 10 years of aviation industry experience. Furthermore, all the industry leading inventory repositories has been populated with the list
              </Text>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}