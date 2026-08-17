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
            src="/images/repair.webp"
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
                 Engineered for Excellence
                </Title>

              </Flex>
                    <p>
                    As the leading repair and overhaul group, our custom solutions always focus on providing client-centric, major components for their maintenance, fitting applications and manufacturing needs.
                    </p>

              {/* Stats */}
              <Flex
                wrap="wrap"
                gap={50}
              >

                {[
                  ["3 Mn+", "Aviation Parts Inventory"],
                  ["500+", "OEM Warranty Contracts"],
                  ["250+", "Repair capabilities"],
                  ["50+", "Service Centers"],
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