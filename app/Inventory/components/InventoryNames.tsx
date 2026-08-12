"use client";

import {
  Box,
  Container,
  Image,
  SimpleGrid,
} from "@mantine/core";

const certificates = [
  {
    image: "/images/inventory/333333.svg",
  },
  {
    image: "/images/inventory/333333 (1).svg",
  },
  {
    image: "/images/inventory/333333 (2).svg",
  },
  {
    image: "/images/inventory/333333 (3).svg",
  },
];

export default function InventoryCertificateSection() {
  return (
    <Box bg="white" py={40}>
      <Container size="xl">
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 4 }}
          spacing="xl"
          style={{
            alignItems: "center",
          }}
        >
          {certificates.map((certificate, index) => (
            <Box
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={certificate.image}
                alt="Certificate"
                h={40}
                fit="contain"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}