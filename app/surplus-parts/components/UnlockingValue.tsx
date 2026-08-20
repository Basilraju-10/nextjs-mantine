"use client";

import {
  Box,
  Flex,
  Stack,
  Text,
  Title,
  Image,
  Container,
} from "@mantine/core";

export default function UnlockingValue() {
  return (
    <Box bg="white">

      <Flex
        direction={{ base: "column", md: "row" }}
        align="stretch"
        w="100%"
      >

        {/* Left Side Image */}
        <Box
          flex={1}
          style={{
            minHeight: 600,
          }}
        >
          <Image
            src="/images/surplus.webp"
            alt="Exchange"
            h="100%"
            w="90%"
            fit="cover"
          />
        </Box>


        {/* Right Side */}
        <Box
          flex={1}
          py={70}
        >

          <Container size="md">

            <Stack gap={50}>

              {/* Heading with vertical line */}
              <Flex
                align="center"
                gap={20}
              >

                <Box
                  w={4}
                  h={80}
                  bg="#00552F"
                  style={{
                    borderRadius: 10,
                  }}
                />

                <Title
                  order={2}
                  c="#00552F"
                  fw={500}
                  style={{
                    lineHeight: 1.2,
                  }}
                >
                Seamless Procurement, Optimal value for money
                </Title>

              </Flex>
                    <p>
                   GFA&apos;s surplus purchasing programs offer dynamic options to buy excess or surplus inventory at competitive prices, providing exceptional value while securing essential spares for your fleets.
                    </p>

              {/* Stats */}
              <Flex
                wrap="wrap"
                gap={50}
              >

                {[
                  ["3 Mn+", "Aircraft Parts Deliver"],
                  ["500+", "Aircraft Spares Vendors"],
                  ["250+", "Airline Customers"],
                  ["50+", "Repair Stations"],
                ].map(([number, label]) => (

                  <Flex
                    key={label}
                    w={220}
                    gap="md"
                    align="flex-start"
                  >

                    <Box
                      w={4}
                      h={60}
                      bg="#00552F"
                      style={{
                        borderRadius: 10,
                      }}
                    />

                    <Box>

                      <Text
                        fz={36}
                        fw={500}
                        c="#00552F"
                      >
                        {number}
                      </Text>


                      <Text
                        c="#00552F"
                        size="sm"
                      >
                        {label}
                      </Text>

                    </Box>

                  </Flex>

                ))}

              </Flex>

            </Stack>

          </Container>

        </Box>

      </Flex>

    </Box>
  );
}