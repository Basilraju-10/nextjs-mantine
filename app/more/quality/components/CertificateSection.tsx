"use client";

import {
  ActionIcon,
  Anchor,
  Box,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
} from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";

const certificates = [
  {
    image: "/images/quality/asacb.svg",
    file: "#",
  },
  {
    image: "/images/quality/asa.svg",
    file: "#",
  },
  {
    image: "/images/quality/asa2.svg",
    file: "#",
  },
];

export default function CertificateSection() {
  return (
    <Box bg="white" pb={100}>
      <Container size="lg">
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3 }}
          spacing="xl"
        >
          {certificates.map((certificate, index) => (
            <Card
              key={index}
              withBorder
              radius={0}
              shadow="none"
              p={40}
                className="certificate-card"
              style={{
                background: "#FBFFFC",
                border: "1px solid #E7ECEB",
                minHeight: 220,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={certificate.image}
                alt="Certificate"
                h={70}
                fit="contain"
                mb={40}
              />

              <Group gap={8}>
                <ActionIcon
                  variant="transparent"
                  color="green"
                >
                  <IconDownload size={18} />
                </ActionIcon>

                <Anchor
                  href={certificate.file}
                  underline="never"
                  c="#475569"
                  fw={700}
                  size="sm"
                >
                  DOWNLOAD CERTIFICATE
                </Anchor>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}