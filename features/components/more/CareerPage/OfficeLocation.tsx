"use client";

import {
  Box,
  Container,
  Group,
  Image,
  Popover,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import {
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

const offices = [
  {
    name: "United Arab Emirates Office",
    left: "57%",
    top: "41%",
    position: "top" as const,
    address:
      "PO Box #371947, 7WA, Office#2007,\nDubai Airport Free Zone,\nDubai, UAE\n\nGFA Logistics DWC LLC,\nAC-ASC-B4-05-(O)-18,\nAerospace Supply Chain - Building 4,\nMohammed Bin Rashid Aerospace Hub,\nP.O. Box 371947,\nDubai, UAE",
    phone: "+971 4 852 1463",
    email: "sales@gfa.aero",
  },

  {
    name: "United States Office",
    left: "25%",
    top: "28%",
    position: "bottom" as const,
    address:
      "Emerald Plaza,\n402 West Broadway,\nSuite #400,\nSan Diego, CA 92101,\nUnited States\n\nGFA Aerospace USA Operations",
    phone: "+1 858 309 5463",
    email: "info@gfa.aero",
  },

  {
    name: "Jordan Office",
    left: "53%",
    top: "34%",
    position: "top" as const,
    address:
      "Alsalameh Building #22,\n2nd Floor, Office #4,\nYajouz Street,\nAljubeiha,\nAmman, Jordan\n\nGFA Jordan Operations",
    phone: "+962 6 535 9857",
    email: "partners@gfa.aero",
  },

  {
    name: "India Office",
    left: "60%",
    top: "45%",
    position: "top" as const,
    address:
      "#14 - Tower II,\nTransAsia Cyber Park,\nInfopark Phase-2,\nKochi, Kerala,\nIndia - 682303\n\nGFA APAC Operations",
    phone: "+91 484 4042400",
    email: "apac@gfa.aero",
  },
];

export default function OfficeLocation() {
  return (
    <Box py={100} bg="white">
      <Container size="lg">

        {/* Heading */}
        <Stack align="center" gap="xs">
          <Text
            tt="uppercase"
            fw={700}
            size="sm"
            c="dimmed"
            style={{
              letterSpacing: 2,
            }}
          >
            Office Locations
          </Text>

          <Title
            order={1}
            ta="center"
            fw={700}
            style={{
              fontSize: 36,
            }}
          >
            <Text
              component="span"
              c="#00B86B"
              inherit
            >
              Your Next Stop:
            </Text>{" "}
            Your Career
          </Title>
        </Stack>

        {/* Map */}
        <Box
          mt={20}
          style={{
            position: "relative",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <Image
            src="/images/globe-square.png"
            alt="World Map"
            style={{
              width: "100%",
              opacity: 0.15,
              display: "block",
            }}
          />

          {/* Office Dots */}
          {offices.map((office) => (
            <Popover
              key={office.name}
              width={320}
              position={office.position}
              withArrow
              shadow="md"
            >
              <Popover.Target>
                <Box
                  style={{
                    position: "absolute",
                    left: office.left,
                    top: office.top,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#00B86B",
                    border: "2px solid white",
                    cursor: "pointer",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                  }}
                />
              </Popover.Target>

              <Popover.Dropdown>
                <Stack gap="sm">

                  {/* Office Name */}
                  <Text fw={700}>
                    {office.name}
                  </Text>

                  {/* Address */}
                  <Text
                    size="sm"
                    c="dimmed"
                    style={{
                      whiteSpace: "pre-line",
                    }}
                  >
                    {office.address}
                  </Text>

                  {/* Divider */}
                  <Box
                    style={{
                      borderTop: "1px solid #eee",
                    }}
                  />

                  {/* Phone */}
                  <Group gap="xs">
                    <IconPhone
                      size={16}
                      color="#00B86B"
                    />

                    <Text
                      size="sm"
                      c="dimmed"
                    >
                      {office.phone}
                    </Text>
                  </Group>

                  {/* Email */}
                  <Group gap="xs">
                    <IconMail
                      size={16}
                      color="#00B86B"
                    />

                    <Text
                      size="sm"
                      c="dimmed"
                    >
                      {office.email}
                    </Text>
                  </Group>

                </Stack>
              </Popover.Dropdown>
            </Popover>
          ))}
        </Box>
      </Container>
    </Box>
  );
}