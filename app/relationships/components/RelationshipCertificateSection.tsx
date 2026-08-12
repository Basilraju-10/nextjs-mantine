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
    image: "/images/relationships/0071ba.svg",
    file: "#",
  },
  {
    image: "/images/relationships/003366.svg",
    file: "#",
  },
  {
    image: "/images/relationships/1a1a7a.svg",
    file: "#",
  },
  {
    image: "/images/relationships/003366.svg",
    file: "#",
  },
];

export default function RelationshipCertificateSection() {
  return (
    <Box bg="white" pb={100}>
      <Container size="md">
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 4 }}
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
                width: "100%",
                height: "75%",
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

              <Group gap={8} wrap="nowrap">
              <ActionIcon
                variant="transparent"
                color="green"
                style={{ flexShrink: 0 }}
                >
                <IconDownload size={18} />
              </ActionIcon>

              <Anchor
                href={certificate.file}
                underline="never"
                c="#475569"
                fw={700}
                size="xs"
                style={{
                  whiteSpace: "nowrap",
                }}
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